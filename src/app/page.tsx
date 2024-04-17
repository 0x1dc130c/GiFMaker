import React from "react";
import Link from 'next/link'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Borad from "../components/board";
import Tags_imge from "../components/tags";
import SearchBar from "../components/searchbar";
import Sort from "../components/sort";
export default function Home() {

  

  return (
    < main >
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-gray-200">
        <div className="grid bg-gray-500 m-[20px] p-14 w-[100rem] min-h-screen">
          <Sort/>
          <div className="grid p-6">
          <SearchBar />
            <div className="flex flwx-col float-right mr-5 relative">
              {/* <Tags_imge /> */}
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
