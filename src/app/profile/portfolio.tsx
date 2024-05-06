"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface PortfolioProps {
  gridClass: string;
}

function useImgState() {
  const [imgURLS, setImgURLS] = useState<string[]>([]);
  const [showPopUp, setShowPopUp] = useState("");

  return { imgURLS, setImgURLS, showPopUp, setShowPopUp };
}

// const imgURLS: string[] = [];
const cols_one: string[] = [];
const cols_two: string[] = [];
const cols_three: string[] = [];
const cols_four: string[] = [];
const cols_five: string[] = [];
const cols_more: string[] = [];

const Portfolio: React.FC<PortfolioProps> = ({ gridClass}) => {
  const { imgURLS, setImgURLS } = useImgState();

  useEffect(() => {
    axios.post("/api/portfolio").then((res) => {
      setImgURLS(res.data.img_url);
    });
  }, []);

  const handleClick = (url: string) => {
    Swal.fire({
      imageUrl: url,
      text: "คุณต้องการลบรูปนี้หรือไม่?",
      showCancelButton: true,
      confirmButtonText: "ลบ",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("/api/deleteimg", { url }).then((res) => {
          if (res.data.istrue) {
            Swal.fire("ลบรูปสำเร็จ", "", "success").then(() => {
              window.location.reload();
            });
          }
        });
      }
    });
  };       

  for (let i = 0; i < imgURLS.length; i++) {
    if (cols_one.length <= 3) {
      cols_one.push(imgURLS[i]);
    } else if (cols_two.length <= 3) {
      cols_two.push(imgURLS[i]);
    } else if (cols_three.length <= 3) {
      cols_three.push(imgURLS[i]);
    } else if (cols_four.length <= 3) {
      cols_four.push(imgURLS[i]);
    } else if (cols_five.length <= 3) {
      cols_five.push(imgURLS[i]);
    } else {
      cols_more.push(imgURLS[i]);
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div className={gridClass}>
        {cols_one.map((url, index) => (
          <div key={index} className="w-full h-full flex">
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src={url}
              alt=""
              onClick={() => handleClick(url)}
            />
          </div>
        ))}
      </div>

      <div className={gridClass}>
        {cols_two.map((url, index) => (
          // console.log('col 1', url),
          <div key={index} className="w-full h-full flex">
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src={url}
              alt=""
              onClick={() => handleClick(url)}
            />
          </div>
        ))}
      </div>

      <div className={gridClass}>
        {cols_three.map((url, index) => (
          // console.log('col 2', url),
          <div key={index} className="w-full h-full flex">
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src={url}
              alt=""
              onClick={() => handleClick(url)}
            />
          </div>
        ))}
      </div>

      <div className={gridClass}>
        {cols_four.map((url, index) => (
          // console.log('col 3', url),
          <div key={index} className="w-full h-full flex">
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src={url}
              alt=""
              onClick={() => handleClick(url)}
            />
          </div>
        ))}
      </div>

      <div className={gridClass}>
        {cols_five.map((url, index) => (
          // console.log('col 4', url),
          <div key={index} className="w-full h-full flex">
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src={url}
              alt=""
              onClick={() => handleClick(url)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
