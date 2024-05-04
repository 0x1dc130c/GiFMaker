import { observer } from 'mobx-react';
import React, { useState, useEffect, useRef } from 'react';
import { StoreContext } from '@/store';
import { Stickerentity } from '../entity/stickerEntity';
export const StickerPanel = observer(() => {
    const store = React.useContext(StoreContext);
    const stickerImages = ['sticker-1.png', 'sticker-2.png', 'sticker-3.png'];
    if(store.sticker.length === 0) {
        stickerImages.forEach((image, index) => {
            store.addStickerResource('/stickers/'+image);
            store.addImage(index); // เรียกใช้งาน store.addImage(index) ที่นี่หรือในที่อื่นที่เหมาะสม
        });
    }

    return (
        <div>
            <div>
                {store.sticker && store.sticker.map((sticker: any, index: any) => {
                    return <Stickerentity key={sticker} sticker={sticker} index={index} />;
                })}
            </div>
        </div>
    );
});