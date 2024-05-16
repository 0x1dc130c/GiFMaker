'use client';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { StoreContext } from '@/store';
import { formatTimeToMinSec } from "@/utils";
import { MdAdd } from 'react-icons/md';
import axios from 'axios';
// Add missing import statement
type StickerPanelProps = {
    sticker: string;
    index: number;
};


export const Stickerentity = observer(

    ({ sticker, index }: StickerPanelProps) => {
        const store = React.useContext(StoreContext);
        const ref = React.useRef<HTMLVideoElement>(null);
        const [formatedVideoLength, setFormatedVideoLength] =
            React.useState("00:00");
        return (
            <div className="rounded-lg overflow-hidden items-center m-[15px] flex flex-col relative cursor-pointer bg-gray-700 p-4" onClick={() => store.addStickers(index)}>
                <div className="bg-[rgba(0,0,0,.25)] text-white py-1 absolute text-base top-2 right-2">
                    {/* {resolution.w} x {resolution.h} */}
                    {formatedVideoLength}
                </div>
                {
                    <video
                        onLoadedData={() => {
                            const videoLength = ref.current?.duration ?? 0;
                            setFormatedVideoLength(formatTimeToMinSec(videoLength));
                        }}
                        autoPlay
                        loop
                        ref={ref}
                        className="max-h-[100px] max-w-[150px]"
                        src={sticker}
                        height={200}
                        width={200}
                        id={`image-${index}`}
                    ></video>
                }
            </div>
        );
    }
);