"use client";
import React, { useState } from "react";
import { observer } from "mobx-react";
import { TextResource } from "../entity/TextResource";
import ColorPicker from "./colorpicker";
import FontSelect from "./fontText";
import { StoreContext } from "@/store";
import AlignText from "./alignText";
import StrokeColor from "./strokeColortext";
import { set } from "animejs";

const TEXT_RESOURCES = [
  {
    name: "Title",
    fontSize: 28,
    fontWeight: 600,
  },
  {
    name: "Subtitle",
    fontSize: 24,
    fontWeight: 600,
  },
  {
    name: "Body",
    fontSize: 20,
    fontWeight: 400,
  },
];
export const TextResourcesPanel = observer(() => {
  const [textColor_, setTextColor_] = useState("#ffffff");
  const store = React.useContext(StoreContext);

  
  return (
    <div className="bg-slate-200 h-full">
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold text-black text-xl">
        Text
      </div>
      {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md m-2">
        <h1 className="text-2xl text-gray-800 font-semibold mb-4">Color</h1>
        <div className="flex flex-wrap gap-2">
          <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" style={{ backgroundColor: "#000000" }} onClick={() => handleChange("#000000")}>Black</button>
          <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" style={{ backgroundColor: "#0000FF" }} onClick={() => handleChange("#0000FF")}>Blue</button>
          <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" style={{ backgroundColor: "#FF0000" }} onClick={() => handleChange("#FF0000")}>Red</button>
          <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" style={{ backgroundColor: "#008000" }} onClick={() => handleChange("#008000")}>Green</button>
        </div>
        <ColorPicker />
      </div> */}

      {/*  */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md m-2">
        <h1 className="text-2xl text-gray-800 font-semibold mb-4">Text box</h1>
        <ul className="divide-y divide-gray-200">
          {TEXT_RESOURCES.map((resource) => {
            return (
              <li key={resource.name} className="cursor-pointer">
                <TextResource
                  sampleText={resource.name}
                  fontSize={resource.fontSize}
                  textColor={textColor_}
                  fontWeight={resource.fontWeight}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
