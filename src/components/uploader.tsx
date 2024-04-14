//app/components/uploader.tsx

import { useState } from 'react';
import axios from 'axios';
import fetch from 'node-fetch';
import { set } from 'animejs';


export default function UploadFile() {
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedFile, setSetSelectedFile] = useState<File>();

    const handleImageUpload = async () => {
        setUploading(true);
        if (selectedImage && selectedFile) {
            try {
                const formData = new FormData();
                formData.set('image', selectedFile);
                if (!formData.has('image')) {
                    console.log('No image selected');
                } else {
                    console.log('image for formData : ', formData.get('image'));
                }
                const { data } = await axios.post('/api/upload', formData);
                console.log('data : ', data);
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
        <div>
            <div className="flex row-span-1 justify-center m-auto">
                <img src={selectedImage} alt="Selected Image" className="max-h-96" />
            </div>
            <div className="flex flwx-col float-right mr-5 relative row-span-3">
                <input type="file" accept=".gif" onChange={handleImageChange} className="" id="upload" />
                <button onClick={handleImageUpload} disabled={uploading} className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4">
                    {uploading ? 'Uploading -- ' : "Upload"}
                </button>
            </div>
        </div>
    );
}
