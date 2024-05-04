"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import PopUp from "./popup";
import ReloadImage from "./reloadImage";

interface BoradProps {
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

export function ReloadImageborad() {
  const { imgURLS, setImgURLS, showPopUp, setShowPopUp } = useImgState();
  console.log("value ReloadImageborad : ", false);
  useEffect(() => {
    async function fetchBlobImages() {
      try {
        const response = await axios.get("/api/getImage");
        const { urls } = response.data;
        setImgURLS(urls);

        if (urls.length === 0) {
          window.location.reload();
          console.log("No images found.");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    fetchBlobImages();
  }, []);

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
}
interface BoradProps {
  gridClass: string;
  sort: string;
  search: string;
}

const Borad: React.FC<BoradProps> = ({ gridClass, sort, search }) => {
  const { imgURLS, setImgURLS, showPopUp, setShowPopUp } = useImgState();

  const handleClick = (url: string) => {
    console.log("Print url:", url);
    setShowPopUp(url);
  };

  const handleClose = () => {
    setShowPopUp("");
  };

  useEffect(() => {
    cols_one.length = 0;
    cols_two.length = 0;
    cols_three.length = 0;
    cols_four.length = 0;
    cols_five.length = 0;
    cols_more.length = 0;

    setImgURLS([]);
    
    axios.post("/api/sortImage", { sort }).then((response) => {
      if (response.data.status === 200) {
        console.log(
          "Sorted images:",
          response.data.img_url,
          response.data.sort
        );
        setImgURLS(response.data.img_url);
      } else {
        console.error("Error sorting images:", response.data.message);
      }
    });
  }, [sort]);

  useEffect(() => {
    cols_one.length = 0;
    cols_two.length = 0;
    cols_three.length = 0;
    cols_four.length = 0;
    cols_five.length = 0;
    cols_more.length = 0;

    setImgURLS([]);
    
    axios.post("/api/search", { search }).then((response) => {
      if (response.data.status === 200) {
        setImgURLS(response.data.img_url);
      } else {
        console.error("Error sorting images:", response.data.message);
      }
    });
  }, [search]);

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

      {showPopUp && <PopUp imgUrl={showPopUp} onclose={handleClose} />}
    </div>
  );
};

export default Borad;
