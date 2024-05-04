"use client";
import React from "react";
import { StoreContext } from "@/store";
// import { formatTimeToMinSec } from "@/utils";
import { observer } from "mobx-react";
import { VideoEditorElement, ImageEditorElement, EffecType } from "@/types";


const EFFECT_TYPE_TO_LABEL: Record<string, string> = {
  none: "None",
  blackAndWhite: "Black and White",
  sepia: "Sepia",
  invert: "Invert",
};
export type EffectResourceProps = {
  editorElement: VideoEditorElement | ImageEditorElement;
};

export const EffectResource = observer((props: EffectResourceProps) => {

  const handleChangeEffectType = (type: EffecType) => {
    console.log("type", type);
    console.log('props.editorElement.id', props.editorElement.id)
    store.updateEffect(props.editorElement.id, { type });
  };

  const store = React.useContext(StoreContext);
  return (
    <div className="flex flex-wrap">
      {Object.entries(EFFECT_TYPE_TO_LABEL).map(([effectType, label]) => (
        <div
          key={effectType}
          className="rounded-lg overflow-hidden items-center bg-slate-800 m-[15px] flex flex-col relative min-h-[100px] p-2"
        >
          <div
            className="image-container"
            style={{
              filter: effectType === "none" ? "none" : `grayscale(${effectType === "blackAndWhite" ? "100%" : "0%"}) sepia(${effectType === "sepia" ? "100%" : "0%"}) invert(${effectType === "invert" ? "100%" : "0%"})`,
            }}
          >
            <img src="/images/imgTast.jpg" alt={label} />
          </div>
          <span>{label}</span>
          <button
            className="bg-slate-100 text-black rounded-lg px-2 py-1 ml-2 w-16 text-xs"
            onClick={() => handleChangeEffectType(effectType as EffecType)}
          >
            Select
          </button>
        </div>
      ))}
    </div>

  );
});

