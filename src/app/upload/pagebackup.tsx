'use client';
import Navbar from "@/components/Navbar-login";
import Footer from "@/components/Footer";
import { useState } from "react";
import axios from "axios";
import { ChangeEvent } from "react";
export default function Upload() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageUpload = async () => {
        if (selectedImage) {
            try {
                const reader = new FileReader();
                reader.readAsDataURL(selectedImage);
                reader.onloadend = async () => {
                    const base64Image = (reader.result as string)?.split(',')[1]; // Add type assertion

                    await axios.post('/api/upload', { base64Image });
                };
            } catch (error) {
            }
        }
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedImage(file || null);
    };
    // const [file, setFile] = useState<File | null>(null);

    // // Function to handle file change
    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const selectedFile = event.target.files ? event.target.files[0] : null;
    //     setFile(selectedFile);
    // };

    // // Function to upload file to Azure via API
    // const uploadFileToApi = async () => {
    //     console.log('Uploading file...');
    //     console.log('file name : ',file);
    //     if (!file) {
    //         console.error("No file selected for upload");
    //         return;
    //     }

    //     try {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onload = async () => {
    //             const base64 = reader.result as string;
    //             const response = await axios.post('/api/upload', {
    //                 name: file.name,
    //                 type: file.type,
    //                 data: base64.split(',')[1],
    //             });
    //             if (response.status === 200) {
    //                 console.log('File uploaded successfully');
    //             } else {
    //                 console.error('Failed to upload file');
    //             }
    //         }

    //     } catch (error) {
    //         console.error('Error uploading file:', error);
    //     }
    // };

    return (
        <div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-gray-200">
                <div className="grid bg-gray-500 m-[20px] p-14 w-[100rem] min-h-screen">
                    <div className="grid p-6">
                        <div className="flex row-span-1 justify-center m-auto">
                            <h1 className="text-5xl text-center">Upload Gif</h1>
                        </div>
                        <div className="flex flwx-col float-right mr-5 relative row-span-3">
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                                </label>
                            </div>
                            <button onClick={handleImageUpload} className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4">
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
