'use client';
import Navbar from "@/components/Navbar-login";
import Footer from "@/components/Footer";
import Uploadfile from "@/components/uploader";

export default function Upload() {

    return (
        <div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-gray-200">
                <div className="bg-gray-500 m-[20px] p-14 w-[100rem] min-h-screen">
                    <div className="">
                        <div className="flex justify-center m-4">
                            <h1 className="text-5xl text-center">Upload Gif</h1>
                            
                        </div>
                        <div className="">
                            <Uploadfile />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
