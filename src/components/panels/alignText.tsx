'use client';
// import React, { useState } from 'react';
import { StoreContext } from "@/store";
// alignText component to align text
import React, { useState, useContext } from 'react';
import { AiOutlineAlignLeft, AiOutlineAlignCenter, AiOutlineAlignRight } from 'react-icons/ai';

const AlignText = () => {
    const store = useContext(StoreContext);
    const [selectedAlign, setSelectedAlign] = useState('');

    const handleAlignChange = (align:any) => {
        setSelectedAlign(align);
        store.setTextAlign(align);
    };

    return (
        <div>
            <div className="mt-1 flex items-center">
                <AiOutlineAlignLeft
                    className={`mr-4 cursor-pointer text-4xl text-white ${selectedAlign === 'left' && 'text-red-500'}`}
                    onClick={() => handleAlignChange('left')}
                />
                <AiOutlineAlignCenter
                    className={`mr-4 cursor-pointer text-4xl text-white ${selectedAlign === 'center' && 'text-red-500'}`}
                    onClick={() => handleAlignChange('center')}
                />
                <AiOutlineAlignRight
                    className={`cursor-pointer text-4xl text-white ${selectedAlign === 'right' && 'text-red-500'}`}
                    onClick={() => handleAlignChange('right')}
                />
            </div>
        </div>
    );
};

export default AlignText;