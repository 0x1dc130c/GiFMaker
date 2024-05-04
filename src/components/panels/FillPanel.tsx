// FillPanel.js
'use client';
import React from 'react';
import { observer } from 'mobx-react';


export const FillPanel = observer(() => {
  
  const handleBrightnessChange = (value: string) => {
    console.log( 'brightness =================== ', value );
    // handle brightness change
  };

  const handleContrastChange = (value: string) => {
    console.log( 'contrast ==================== ', value );
    // handle contrast change
  };

  return (
    <>
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold">
        Brightness
        <input type="range" min="-100" max="100" value={"brightness"} onChange={(e) => handleBrightnessChange(e.target.value)} />
      </div>
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold">
        Contrast
        <input type="range" min="-100" max="100" value={"contrast"} onChange={(e) => handleContrastChange(e.target.value)} />
      </div>
    </>
  );
});
