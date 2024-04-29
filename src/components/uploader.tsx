//app/components/uploader.tsx

import { useState } from 'react';
import axios from 'axios';
import fetch from 'node-fetch';
import { set } from 'animejs';
import tags from './tags';

export default function UploadFile() {
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedFile, setSetSelectedFile] = useState<File>();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");

    const handleNamechange  =async (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        console.log('name : ', name);
    }

    const handleDescchange = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
        console.log('description : ', description);
    };

    const handleImageUpload = async () => {
        setUploading(true);
        if (selectedImage && selectedFile) {
            try {
                const formData = new FormData();
                formData.set('image', selectedFile);
                formData.set('name', name);
                formData.set('description', description);

                if (!formData.has('image')) {
                    console.log('No image selected');
                } else {
                    console.log('image for formData : ', formData.get('image'));
                }
                console.log('formData client : ', formData);
                const { data } = await axios.post('/api/upload', formData);
                console.log('data : ', data);
                if (data.status === 200) {
                    console.log('File uploaded successfully');
                    setSelectedImage("");
                    setSetSelectedFile(undefined);
                    setName("");
                    setDescription("");
                    
                } else {
                    console.log('Error uploading file');
                }
                setUploading(false);
                // Handle success
            } catch (error) {
                console.error('Error uploading file:', error);
                // Handle error
            }
        } else {
            console.log('No image selected');
        }
    };


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null; // Ensure file is either File or null
        console.log('file : ', file);
        setSelectedImage(file ? URL.createObjectURL(file) : ""); // Add type assertion to ensure file is not null
        setSetSelectedFile(file || undefined); // Update to handle null case
    };

    return (
        <div className="grid grid-rows-[500px_100px] grid-cols-[1fr_2fr]">
            <div className="flex flex-col items-center justify-center row-1 col-1 bg-gray-300 p-5">
                <label htmlFor="dropzone-file" className="relative flex flex-col items-center justify-center w-[52rem] h-[42rem] border-2 border-gray-800 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {selectedImage && (
                            <img src={selectedImage} alt="Selected Image" className="object-contain object-center" />
                        )}
                    </div>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" accept=".gif" onChange={handleImageChange} />
                </label>
            </div>
            <div className=" row-start-1 col-start-2 bg-gray-500 p-5">
                <div className="mb-6 m-2">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input value={name} onChange={handleNamechange} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6 m-2">
                {tags()} 
                </div>
                <div className="mb-6 m-2">

                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea value={description} onChange={handleDescchange} id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                </div>

            </div>
            <div className="flex items-center justify-center row-start-2 col-start-2 bg-gray-500 p-5">
                <button onClick={handleImageUpload} disabled={uploading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4">
                    {uploading ? 'Uploading.. ' : "Upload"}
                </button>
            </div>
        </div>
        // 
    );
    {/* // return (
    //     <div>
    //         <div className="flex row-span-1 justify-center m-auto">
    //             <img src={selectedImage} alt="Selected Image" className="max-h-96" />
    //         </div>
    //         <div className="flex flwx-col float-right mr-5 relative row-span-3">
    //             <input type="file" accept=".gif" onChange={handleImageChange} className="" id="" />
                <button onClick={handleImageUpload} disabled={uploading} className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4">
                    {uploading ? 'Uploading -- ' : "Upload"}
                </button>
    //         </div>
    //     </div>
    // ); */}
}
