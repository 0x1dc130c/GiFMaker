'use client';
import exp from "constants";
import React, { useState, useEffect } from "react";

const PopTag_ = ({ item, onclose }: { item: any, onclose: () => void }) => {
    console.log('item ----------------------> : ', item);
    const [tagid_, setTagid] = useState(item); 

    const handleconfirm = async (statusconfirm: string) => {
        console.log('tagid_ : ', tagid_);
        // await fetch("/api/addTags", {
        //     method: "POST",
        //     body: JSON.stringify({tagid_, statusconfirm}),
        // }).then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         if (data.status === 200) {
        //             onclose();
        //         } else {
        //             console.log('data.message : ', data.message);
        //         }

        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                <h1> Tag </h1>
                
                <button onClick={onclose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg m-2 cursor-pointer">Close</button>
                <button onClick={() => {handleconfirm('active')}} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg m-2 cursor-pointer">Confrim</button>
            </div>
        </div>
    )
}


export default PopTag_;