'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Uploadfile from "@/components/uploader";



export default function Upload() {
    return (
        <div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-gray-200">
                <div className="grid bg-gray-500 m-[20px] p-14 w-[100rem] min-h-screen">
                    <div className="grid p-6">
                        <div className="flex row-span-1 justify-center m-auto">
                            <h1 className="text-5xl text-center">Upload Gif</h1>
                            
                        </div>
                        <Uploadfile />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
