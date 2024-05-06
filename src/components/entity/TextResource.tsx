"use client";
import React, { useState } from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { MdAdd } from "react-icons/md";

type TextResourceProps = {
  fontSize: number;
  fontWeight: number;
  textColor: string;
  sampleText: string;
};
export const TextResource = observer(
  ({ fontSize, fontWeight, sampleText }: TextResourceProps) => {
    const store = React.useContext(StoreContext);

    return (
      <div className="items-center m-[5px] flex flex-row">
        <div
          className="flex text-black px-2 py-1"
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: `${fontWeight}`,
          }}
        >
          <div
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center"
            onClick={() =>
              store.addText({
                text: sampleText,
                fontSize: fontSize,
                fontWeight: fontWeight,
                textColor: store.textColor,
                fontFamily: store.fontFamily,
                textalign: store.textAlign,
                strokeColor: store.strokeColor,
                strokeSzie: store.strokeSzie,
              })
            }
          >
            {sampleText}
          </div>
        </div>
      </div>
    );
  }
);
