"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import PopUp from "./popup";
import ReloadImage from "./reloadImage";
import { set } from "animejs";
import { FcLike } from "react-icons/fc";
import Swal from "sweetalert2";

interface BoradProps {
  gridClass: string;
  sort: string;
  search: string;
  refecth: boolean;
}

const Borad: React.FC<BoradProps> = ({ gridClass, sort, search, refecth }) => {

  const [colsOne, setColsOne] = useState<string[]>([]);
  const [colsTwo, setColsTwo] = useState<string[]>([]);
  const [colsThree, setColsThree] = useState<string[]>([]);
  const [colsFour, setColsFour] = useState<string[]>([]);
  const [colsFive, setColsFive] = useState<string[]>([]);
  const [colsMore, setColsMore] = useState<string[]>([]);
  const [imgURLS, setImgURLS] = useState<string[]>([]);
  const [showPopUp, setShowPopUp] = useState("");
  const [count, setCount] = useState(3);
  const [number, setNumber] = useState(0);
  const [likeImg, setLikeImg] = useState<string[]>([]);
  const [checkSortimg, setCheckSortimg] = useState('latest');


  function Reloadimg() {
    setCount((prevCount: number) => prevCount + 3);
    setImgURLS([]);
    loadMoreImages();
  }
  const handleClick = (url: string) => {
    setShowPopUp(url);
  };

  const handleClose = () => {
    setShowPopUp("");
  };

  // ฟังก์ชันสำหรับการรีเฟรชรูปภาพ
  const Refecth = () => {
    setImgURLS([]);
    setColsOne([]);
    setColsTwo([]);
    setColsThree([]);
    setColsFour([]);
    setColsFive([]);
    setColsMore([]);
  };

  // ฟังก์ชันสำหรับการโหลดข้อมูลรูปภาพ

  const loadMoreImages = () => {
    Swal.fire({
      title: "Loading...",
      showConfirmButton: false,
      allowOutsideClick: false,
    });
    setImgURLS([]);
    axios.post("/api/loadMore", { sort: sort, setnum: number }).then((response) => {
      if (response.data.status === 200) {
        setImgURLS(response.data.img_url);
        setNumber(response.data.setnum);
        Swal.close();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error loading more images',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const loadImages = (sortParam: any) => {
    Swal.fire({
      title: "Loading...",
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    axios.post("/api/sortImage", { sort: sortParam, setnum: number }).then((response) => {
      if (response.data.status === 200) {
        console.log('response.data.img_url', response.data.img_url)
        setImgURLS(response.data.img_url);
        setNumber(response.data.setnum);
        Swal.close(); // ปิด Swal เมื่อโหลดข้อมูลเสร็จสิ้น
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error sorting images',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const searchImages = (searchParam: string) => {
    Swal.fire({
      title: "Loading...",
      html: "<div class='text-center'><div class='spinner-border' role='status'></div></div>",
      showConfirmButton: false,
      allowOutsideClick: false,
    });
    axios.post("/api/search", { search }).then((response) => {
      if (response.data.status === 200) {
        for (let i = 0; i < response.data.img_url.length; i++) {
          setImgURLS(response.data.img_url);
        }
        Swal.close();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error searching images',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });

  }

  useEffect(() => {
    // ตรวจสอบว่าค่า sort และ checkSortimg เหมือนกันหรือไม่
    if (search != "" && search != undefined) {
      Refecth();
      console.log('search>>>>>>>>>>>>>>>>>>>>', search);
      searchImages(search);
    }
    else if (sort !== checkSortimg) {
      Refecth();
      setCheckSortimg(sort);
      setImgURLS([]);
      console.log('check set imag URLS ', imgURLS)
      loadImages(sort);
      setNumber(0);
      setCount(3);

    } else {
      Refecth();
      loadImages(sort);
    }

  }, [sort, checkSortimg]); // dependencies array
  function loadimage() {
    const cols = [colsOne, colsTwo, colsThree, colsFour, colsFive];
    let index = 0;
    // ตรวจสอบค่า sort
    if (sort === 'popular' || sort === 'latest') {
      // หาก sort เป็น popular หรือ latest ให้เรียงรูปภาพจากซ้ายไปขวา
      for (let i = 0; i < Math.min(number, imgURLS.length); i++) {
        const imgData = JSON.stringify(imgURLS[i]);
        const img_ = imgData.split("|");
        const imgUrlPart = img_[0].split('!')[1].split('Imgurl=').pop() ?? "";
        const userUrl = img_[1].split('"')[0] ?? "";
        const userUrlPart = userUrl.split('=') ?? "";
        const resultdata = imgUrlPart + "|" + userUrlPart;

        let imageExists = false;

        // ตรวจสอบว่ารูปภาพมีอยู่ในคอลัมน์ที่เป็นปัจจุบันหรือไม่
        for (let col of cols) {
          if (col.includes(imgUrlPart)) {
            imageExists = true;
            break;
          }
        }

        if (!imageExists) {
          // เพิ่มรูปภาพลงในคอลัมน์ตามลำดับจากซ้ายไปขวา
          cols[index].push(resultdata);
        }

        // เลื่อนไปยังคอลัมน์ถัดไป
        index = (index + 1) % cols.length;
      }
    } else {
      // หาก sort ไม่ใช่ popular หรือ latest ให้เพิ่มรูปภาพลงในคอลัมน์แบบเฉลี่ย
      for (let i = 0; i < Math.min(number, imgURLS.length); i++) {
        const imgData = JSON.stringify(imgURLS[i]);
        const img_ = imgData.split("|");
        const imgUrlPart = img_[0].split('!')[1].split('Imgurl=').pop() ?? "";
        const userUrl = img_[1].split('"')[0] ?? "";
        const userUrlPart = userUrl.split('=') ?? "";
        const resultdata = imgUrlPart + "|" + userUrlPart;

        let imageExists = false;

        // ตรวจสอบว่ารูปภาพมีอยู่ในคอลัมน์ที่เป็นปัจจุบันหรือไม่
        for (let col of cols) {
          if (col.includes(imgUrlPart)) {
            imageExists = true;
            break;
          }
        }

        if (!imageExists) {
          // เพิ่มรูปภาพลงในคอลัมน์ปัจจุบัน
          cols[index].push(resultdata);
        }

        // เลื่อนไปยังคอลัมน์ถัดไป
        index = (index + 1) % cols.length;
      }
    }
  }

  loadimage();
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className={gridClass}>
          {colsOne.map((url, index) => (

            <div key={index} className="w-full h-full flex relative">
              <img
                className="h-auto max-w-full rounded-lg object-cover cursor-pointer"
                src={url}
                alt=""
              />
              <div
                className="text-white rounded-lg opacity-0 absolute top-0 left-0 right-0 bottom-0 flex items-end p-4 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer"
                onClick={() => handleClick(url)}
              >
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <FcLike className="text-2xl mr-2" />
                    {typeof url === 'string' ? url.split("|")[0].split('?')[2].split('=')[1] ?? "" : ""}
                  </div>
                  <div className="flex items-center">
                    <img
                      src={typeof url === 'string' ? url.split("|")[1].split(',')[1].split('?')[0] ?? "" : ""}
                      className="w-8 h-8 rounded-full mr-4"
                      onError={(e) => { e.currentTarget.src = "/images/profile.png" }}
                    />
                    {typeof url === 'string' ? url.split("|")[1].split(',')[2] ?? "" : ""}
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>

        <div className={gridClass}>
          {colsTwo.map((url, index) => (
            // //console.log('col 1', url),
            <div key={index} className="w-full h-full flex relative">
              <img
                className="h-auto max-w-full rounded-lg object-cover cursor-pointer"
                src={url}
                alt=""
              />
              <div
                className="text-white rounded-lg opacity-0 absolute top-0 left-0 right-0 bottom-0 flex items-end p-4 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer"
                onClick={() => handleClick(url)}
              >
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <FcLike className="text-2xl mr-2" />
                    {typeof url === 'string' ? url.split("|")[0].split('?')[2].split('=')[1] ?? "" : ""}
                  </div>
                  <div className="flex items-center">
                    <img
                      src={typeof url === 'string' ? url.split("|")[1].split(',')[1].split('?')[0] ?? "" : ""}
                      className="w-8 h-8 rounded-full mr-4"
                      onError={(e) => { e.currentTarget.src = "/images/profile.png" }}
                    />
                    {typeof url === 'string' ? url.split("|")[1].split(',')[2] ?? "" : ""}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={gridClass}>
          {colsThree.map((url, index) => (
            // //console.log('col 2', url),
            <div key={index} className="w-full h-full flex relative">
              <img
                className="h-auto max-w-full rounded-lg object-cover cursor-pointer"
                src={url}
                alt=""
              />
              <div
                className="text-white rounded-lg opacity-0 absolute top-0 left-0 right-0 bottom-0 flex items-end p-4 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer"
                onClick={() => handleClick(url)}
              >
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <FcLike className="text-2xl mr-2" />
                    {typeof url === 'string' ? url.split("|")[0].split('?')[2].split('=')[1] ?? "" : ""}
                  </div>
                  <div className="flex items-center">
                    <img
                      src={typeof url === 'string' ? url.split("|")[1].split(',')[1].split('?')[0] ?? "" : ""}
                      className="w-8 h-8 rounded-full mr-4"
                      onError={(e) => { e.currentTarget.src = "/images/profile.png" }}
                    />
                    {typeof url === 'string' ? url.split("|")[1].split(',')[2] ?? "" : ""}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={gridClass}>
          {colsFour.map((url, index) => (
            // //console.log('col 3', url),
            <div key={index} className="w-full h-full flex relative">
              <img
                className="h-auto max-w-full rounded-lg object-cover cursor-pointer"
                src={url}
                alt=""
              />
              <div
                className="text-white rounded-lg opacity-0 absolute top-0 left-0 right-0 bottom-0 flex items-end p-4 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer"
                onClick={() => handleClick(url)}
              >
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <FcLike className="text-2xl mr-2" />
                    {typeof url === 'string' ? url.split("|")[0].split('?')[2].split('=')[1] ?? "" : ""}
                  </div>
                  <div className="flex items-center">
                    <img
                      src={typeof url === 'string' ? url.split("|")[1].split(',')[1].split('?')[0] ?? "" : ""}
                      className="w-8 h-8 rounded-full mr-4"
                      onError={(e) => { e.currentTarget.src = "/images/profile.png" }}
                    />
                    {typeof url === 'string' ? url.split("|")[1].split(',')[2] ?? "" : ""}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={gridClass}>
          {colsFive.map((url, index) => (
            // //console.log('col 4', url),
            <div key={index} className="w-full h-full flex relative">
              <img
                className="h-auto max-w-full rounded-lg object-cover cursor-pointer"
                src={url}
                alt=""
              />
              <div
                className="text-white rounded-lg opacity-0 absolute top-0 left-0 right-0 bottom-0 flex items-end p-4 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer"
                onClick={() => handleClick(url)}
              >
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <FcLike className="text-2xl mr-2" />
                    {typeof url === 'string' ? url.split("|")[0].split('?')[2].split('=')[1] ?? "" : ""}
                  </div>
                  <div className="flex items-center">
                    <img
                      src={typeof url === 'string' ? url.split("|")[1].split(',')[1].split('?')[0] ?? "" : ""}
                      className="w-8 h-8 rounded-full mr-4"
                      onError={(e) => { e.currentTarget.src = "/images/profile.png" }}
                    />
                    {typeof url === 'string' ? url.split("|")[1].split(',')[2] ?? "" : ""}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showPopUp && <PopUp imgUrl={showPopUp} onclose={handleClose} />}
      </div>
      <div className=" m-6 justify-center flex">
        <button type="button" className="cursor-pointer rounded-lg text-white text-3xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 "
          onClick={Reloadimg}
        >
          More</button>
      </div>
    </>
  );
};

export default Borad;

