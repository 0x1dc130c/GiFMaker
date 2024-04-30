import Link from 'next/link'
import Navbar from "../components/Navbar";
import Navbar_login from "../components/Navbar-login";
import Navbar_admin from "../components/Navbar-admin";
import Footer from "../components/Footer";
import Borad, { ReloadImageborad } from "../components/board";
import Tags_imge from "../components/tags";
import SearchBar from "../components/searchbar";
import Sort from "../components/sort";
import { cookies } from 'next/headers'
import React from 'react';

async function CheckCookie() {
  const cookieStorage = cookies();
  const cookie = cookieStorage.get('token');
  const cookieName = cookie?.name;
  const cookieValue = cookie?.value;
  console.log('cookie : ', cookie);
  console.log('cookieName : ', cookieName);
  console.log('cookieValue : ', cookieValue);

  try {
    //'process.env.URL + "/api/Checkcookies" : ', process.env.URL + 
    console.log("/api/Checkcookies" );
    const response = await fetch(process.env.URL + "/api/Checkcookies", {
      method: "POST",
      body: JSON.stringify({ cookieName, cookieValue }),
    });
    const data = await response.json();
    if (data.status === 200) {
      console.log('status -------------- : ', data.status)
      console.log('data ----------->>> : ', data.role === 'admin' ? 'admin' : 'user')
      if (data.role === 'admin') {
        console.log('data -------------- : ', data.role);
        return 'admin';
      } else {
        return 'user';
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error in CheckCookie:', error);
    return null;
  }
}

export default async function Home() {
  const nav = await CheckCookie();
  console.log('nav >>>>>>>>>>>>>>> : ', nav);

  return (
    <main>
      {String(nav) === 'admin' ? <Navbar_admin /> : String(nav) === 'user' ? <Navbar_login /> : <Navbar />}
      <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-gray-200">
        <div className="grid bg-gray-500 m-[20px] p-14 w-[100rem] min-h-screen">
          <Sort />
          <div className="grid p-6">
            <SearchBar />
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
    </main>
  );
}
