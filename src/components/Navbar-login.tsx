'use client'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { FaHome, FaCloudUploadAlt } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { IoInformationCircleSharp } from "react-icons/io5";

function Navbar() {
  const pathname = usePathname();
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");

  const getProfile = async () => {
    // const address = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
    fetch("/api/Checkcookies", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          if (data.data.path_profile !== null) {
            setProfile(data.data.path_profile);
            setName(data.data.name);
          } else {
            setProfile("/images/profile.png");
            setName(data.data.name);
          }

        }
      });
  }

  useEffect(() => {
    getProfile();
  }, []);

  const isActive = (href: string) => {
    return pathname === href ? 'text-blue-700 md:text-fuchsia-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white' : 'text-gray-900 md:text-fuchsia-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white';
  };

  return (
    <nav className="bg-indigo-900 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="logogif.png" className="h-[85px] w-[290px]" alt="Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GIFMaker</span> */}
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="/profile">
            <div className="flex items-center p-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-700">
              <img src={profile} className="w-12 h-12 rounded-full" />
              <span className="m-2 hidden md:block text-2xl text-white font-semibold">{name}</span>
            </div>
            {/* <svg className="w-[42px] h-[42px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd" />
            </svg> */}
          </Link>
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className='bg-indigo-900'>
              <Link href="/" className={`block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:border-gray-700${isActive('/')}`}>
                <span className="flex items-center text-3xl font-semibold block py-2 px-3 md:p-0 rounded hover:bg-fuchsia-500 md:hover:bg-transparent md:hover:text-fuchsia-500 md:dark:hover:text-fuchsia-300 dark:border-fuchsia-300"> Home</span>
              </Link>
            </li>
            <li className='bg-indigo-900'>
              <Link href="/create" className={`block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:border-gray-700 ${isActive('/create')}`}>
                <span className="text-3xl font-semibold block py-2 px-3 md:p-0 rounded hover:bg-fuchsia-500 md:hover:bg-transparent md:hover:text-fuchsia-500 md:dark:hover:text-fuchsia-300 dark:border-fuchsia-300"> Create </span>
              </Link>
            </li>
            <li className='bg-indigo-900'>
              <Link href="/upload" className={`block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:border-gray-700 ${isActive('/upload')}`}>
                <span className="text-3xl font-semibold block py-2 px-3 md:p-0 rounded hover:bg-fuchsia-500 md:hover:bg-transparent md:hover:text-fuchsia-500 md:dark:hover:text-fuchsia-300 dark:border-fuchsia-300"> Upload</span>
              </Link>
            </li>
            <li className='bg-indigo-900'>
              <Link href="/about" className={`block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:border-gray-700 ${isActive('/about')}`}>
                <span className="text-3xl font-semibold block py-2 px-3 md:p-0 rounded hover:bg-fuchsia-500 md:hover:bg-transparent md:hover:text-fuchsia-500 md:dark:hover:text-fuchsia-300 dark:border-fuchsia-300"> About </span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;
{/* <FaHome className="mx-[16px] m-2 w-6 h-6 text-white" />

<IoIosCreate className=" m-2 w-6 h-6 text-white" />
<FaCloudUploadAlt className="m-2 w-6 h-6 text-white" />
<IoInformationCircleSharp className=" m-2 w-6 h-6 text-white" /> */}