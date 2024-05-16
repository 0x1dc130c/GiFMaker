'use client';
import { StoreContext } from "@/store";
import React, { useContext } from 'react';

const StrokeColor = () => {
    const store = useContext(StoreContext);

    const handleChange = (color:any ) => {
        store.setStrokeColor(color);
    };

    return (
        <div className="flex flex-wrap gap-2">
            <button
                className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                style={{ backgroundColor: "#000000" }}
                onClick={() => handleChange("#000000")}
            >
                Black
            </button>
            <button
                className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                style={{ backgroundColor: "#0000FF" }}
                onClick={() => handleChange("#0000FF")}
            >
                Blue
            </button>
            <button
                className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                style={{ backgroundColor: "#FF0000" }}
                onClick={() => handleChange("#FF0000")}
            >
                Red
            </button>
            <button
                className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                style={{ backgroundColor: "#008000" }}
                onClick={() => handleChange("#008000")}
            >
                Green
            </button>
        </div>
    );
};

export default StrokeColor;
