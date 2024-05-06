"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";

export const ExportVideoPanel = observer(() => {
  const store = React.useContext(StoreContext);

  return (
    <>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md m-2">
        <div className="text-sm font-semibold text-xl mb-4">Export</div>

        {/* Set max time from number input */}
        <div className="flex flex-row items-center my-2">
          <div className="text-xs font-semibold mr-2">Video Length:</div>
          <input
            type="number"
            className="rounded text-center border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 max-w-[70px] mr-2"
            value={store.maxTime / 1000}
            onChange={(e) => {
              const value = e.target.value;
              store.setMaxTime(Number(value) * 1000);
            }}
          />
          <div className="text-xs">secs</div>
        </div>

        {/* Format selection with radio button */}
        <div className="flex flex-row items-center my-2">
          <div className="text-xs font-semibold mr-2">Video Format:</div>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              className="mr-1"
              name="video-format"
              value="mp4"
              checked={store.selectedVideoFormat === "mp4"}
              onChange={(e) => {
                store.setVideoFormat("mp4");
              }}
            />
            <span className="text-xs mr-2">MP4</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="mr-1"
              name="video-format"
              value="gif"
              checked={store.selectedVideoFormat === "gif"}
              onChange={(e) => {
                store.setVideoFormat("gif");
              }}
            />
            <span className="text-xs">GIF</span>
          </label>
        </div>

        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mt-4 text-xl"
          onClick={() => {
            store.handleSeek(0);
            store.setSelectedElement(null);
            setTimeout(() => {
              store.setPlaying(true);
              store.saveCanvasToVideoWithAudio();
            }, 1000);
          }}
        >
          Export Video ({store.maxTime / 1000} secs)
        </button>
      </div>
    </>
  );
});
