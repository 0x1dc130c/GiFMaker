"use client";
import React, {useState} from "react";
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
    name: "Text 1",
    fontSize: 28,
    fontWeight: 600,

  },
];
export const TextResourcesPanel = observer(() => {
  const [textColor_, setTextColor_] = useState("#0000FF");
  const store = React.useContext(StoreContext);

  const handleChange = (newColor: string) => {
    console.log('color ---------------> ', newColor)
    setTextColor_(newColor);
    console.log('store ---------------> ', textColor_)
    store.setTextColorStore(newColor);
  }
  return (
    <div className="bg-slate-200 h-full">
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold text-black">
        Text
      </div>
      <div className="">
        <div className="px-[16px] py-[8px] text-xs font-semibold text-black">
          <h1 className="text-2xl"> Color </h1>
          <div>
            <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ backgroundColor: "#000000" }} onClick={() => handleChange("#000000")} />
            <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ backgroundColor: "#0000FF" }} onClick={() => handleChange("#0000FF")} />
            <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ backgroundColor: "#FF0000" }} onClick={() => handleChange("#FF0000")}/>
            <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ backgroundColor: "#008000" }}onClick={() => handleChange("#008000")} />
          </div>
          < ColorPicker/>
        </div>
      </div>
      {/*  */}
      <h1 className="text-2xl"> Text block </h1>

      <ul>
        {TEXT_RESOURCES.map((resource) => {
          return (

            <li
              key={resource.name}
            >
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
      <div>
        <h1 className="text-2xl"> Font </h1>
        < FontSelect />
      </div>
      <div>
        <h1 className="text-2xl"> Align </h1>
        < AlignText />
      </div>
      <div>
        <h1 className="text-2xl"> Stroke Color </h1>
        < StrokeColor />
      </div>
    </div>
    
  );
});
