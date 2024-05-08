"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import {
  MdDownload,
  MdVideoLibrary,
  MdImage,
  MdTitle,
  MdOutlineFormatColorFill,
  MdMovieFilter,
} from "react-icons/md";
import { PiSmileyStickerBold } from "react-icons/pi";
import { Store } from "@/store/Store";

export const Menu = observer(() => {
  const store = React.useContext(StoreContext);

  return (
    <ul className="bg-gray-800 h-full flex flex-col md:p-0 p-4 ">
      {MENU_OPTIONS.map((option) => {
        const isSelected = store.selectedMenuOption === option.name;
        return (
          <li
            key={option.name}
            className={`h-[72px] w-[72px] flex flex-col items-center justify-center ${isSelected ? "bg-gray-500" : ""}`}
          >
            <button
              onClick={() => option.action(store)}
              className={`flex flex-col items-center`}
            >
              <option.icon
                size="20"
                color={
                  isSelected ? "#000" : "#444"
                }
              />
              <div
                className={`text-[0.6rem] hover:text-black ${isSelected ? "text-black" : "text-slate-600"}`}
              >
                {option.name}
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
});

const MENU_OPTIONS = [
  {
    name: "Image",
    icon: MdImage,
    action: (store: Store) => {
      store.setSelectedMenuOption("Image");
    },
  },
  {
    name: "Video",
    icon: MdVideoLibrary,
    action: (store: Store) => {
      store.setSelectedMenuOption("Video");
    },
  },
  {
    name: "Text",
    icon: MdTitle,
    action: (store: Store) => {
      store.setSelectedMenuOption("Text");
    },
  },
  {
    name: "Effect",
    icon: MdMovieFilter,
    action: (store: Store) => {
      store.setSelectedMenuOption("Effect");
    },
  },
  {
  name: "Sticker",
  icon: PiSmileyStickerBold,
  action: (store: Store) => {
    store.setSelectedMenuOption("Sticker");
  },
},
  {
    name: "Filter",
    icon: MdOutlineFormatColorFill,
    action: (store: Store) => {
      store.setSelectedMenuOption("Fill");
    },
  },
  {
    name: "Export",
    icon: MdDownload,
    action: (store: Store) => {
      store.setSelectedMenuOption("Export");
    },
  },
];

// {
//   name: "Audio",
//   icon: MdAudiotrack,
//   action: (store: Store) => {
//     store.setSelectedMenuOption("Audio");
//   },
// },
// {
//   name: "Animation",
//   icon: MdTransform,
//   action: (store: Store) => {
//     store.setSelectedMenuOption("Animation");
//   },
// },