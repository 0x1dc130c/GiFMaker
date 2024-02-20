import React from "react";
import Link from 'next/link'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Borad from "../components/board";
import Tags_imge from "../components/tags";
export default function Home() {
  return (
    < main >
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-gray-200">
        <div className="grid bg-gray-500 m-[20px] p-14 w-[100rem] min-h-screen">
          <div className="sm:hidden row-start-1">
            <label htmlFor="tabs" className="sr-only">Select your country</label>
            <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Profile</option>
              <option>Dashboard</option>
              <option>setting</option>
              <option>Invoioce</option>
            </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 m-[20px]">
            <li className="w-full focus-within:z-10">
              <a href="#" className="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Profile</a>
            </li>
            <li className="w-full focus-within:z-10">
              <a href="#" className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Dashboard</a>
            </li>
            <li className="w-full focus-within:z-10">
              <a href="#" className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Settings</a>
            </li>
            <li className="w-full focus-within:z-10">
              <a href="#" className="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Invoice</a>
            </li>
          </ul>
          <div className="row-start-2 m-1">
            <div className="flex flwx-col float-right mr-5 relative">
              <Tags_imge />
            </div>
          </div>
          <div className="row-start-3">
            <Borad gridClass="grid gap-4" />
          </div>
          <div className="row-start-4">
            <div className="flex flex-col items-center justify-between m-2">
              <Link href="/"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-14 py-2.5 text-center me-2 mb-2 ">More</button></Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </main>
  );
}
