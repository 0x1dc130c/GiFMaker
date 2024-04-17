import React from "react";


const PopUp = ({ imgUrl, onclose }: { imgUrl: string, onclose: () => void }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                <img src={imgUrl} alt="" className="w-full h-auto" />
                <button onClick={onclose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Close</button>
            </div>
        </div>
    );
}

export default PopUp;