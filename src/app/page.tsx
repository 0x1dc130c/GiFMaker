"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Navbar_login from "../components/Navbar-login";
import Navbar_admin from "../components/Navbar-admin";
import Footer from "../components/Footer";
import Borad, { ReloadImageborad } from "../components/board";
import Tags_imge from "../components/tags";
import SearchBar from "../components/searchbar";
import Sort from "../components/sort";
import React, { useEffect, useState } from "react";
import PopUp from "../components/popup";

export default function Home() {
  const [nav, setNav] = useState("");
  const [showPopUp, setShowPopUp] = useState("");

  const handleClose = () => {
    setShowPopUp("");
  };

  fetch(process.env.URL + "/api/Checkcookies", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message == "Success") {
        setNav(data.data.role);
      } else {
        setNav("guest");
      }
    });

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get("share");
    if (page) {
      setShowPopUp(page);
    }
  }, []);

  return (
    <main>
      {String(nav) === "admin" ? (
        <Navbar_admin />
      ) : String(nav) === "user" ? (
        <Navbar_login />
      ) : (
        <Navbar />
      )}
      <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-gray-200">
        <div className="grid bg-gray-500 m-[20px] p-14 w-[100rem] min-h-screen rounded-md">
          <div className="grid p-6">
            <div>
            <Sort />
            <SearchBar />
            </div>
            <div className="flex flwx-col float-right mr-5 relative">
              {/* <Tags_imge /> */}
            </div>
          </div>
          <div className="row-start-3">
            <Borad gridClass="grid gap-4" />
          </div>
          {/* <div className="row-start-4">
            <div className="flex flex-col items-center justify-between m-2">
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-14 py-2.5 text-center me-2 mb-2 " onClick={ReloadImageborad}>More</button>
            </div>
          </div> */}
        </div>
      </main>
      <Footer />
      {showPopUp && <PopUp imgUrl={showPopUp} onclose={handleClose} />}
    </main>
  );
}
