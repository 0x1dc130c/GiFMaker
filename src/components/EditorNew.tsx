'use client';
import { fabric } from "fabric";
import React, { useEffect, useState } from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { Resources } from "./Resources";
import { ElementsPanel } from "./panels/ElementsPanel";
import { Menu } from "./Menu";
import { TimeLine } from "./TimeLine";
import { Store } from "@/store/Store";
import "@/utils/fabric-utils";
import { Toolsobject } from "./panels/tools";
import Navbar from '@/components/Navbar-login';

export const EditorWithStore = () => {
    const [store] = useState(new Store());
    return (
        <StoreContext.Provider value={store}>
            <EditorNew></EditorNew>
        </StoreContext.Provider>
    );
}

export const EditorNew = observer(() => {
    const store = React.useContext(StoreContext);
    const [canvasWidth, setCanvasWidth] = useState(800); // กำหนดค่าเริ่มต้นของความกว้าง canvas
    const [canvasHeight, setCanvasHeight] = useState(500); // กำหนดค่าเริ่มต้นของความสูง canvas

    useEffect(() => {
        const canvas = new fabric.Canvas("canvas", {
            height: canvasHeight,
            width: canvasWidth,
            backgroundColor: "#ededed",
            selection: false // ไม่ต้องให้ fabric.js สร้างการเลือกซ้อนไว้เอง
        });
        fabric.Object.prototype.transparentCorners = false;
        fabric.Object.prototype.cornerColor = "#00a0f5";
        fabric.Object.prototype.cornerStyle = "circle";
        fabric.Object.prototype.cornerStrokeColor = "#0063d8";
        fabric.Object.prototype.cornerSize = 10;
        // canvas mouse down without target should deselect active object
        canvas.on("mouse:down", function (e) {
            if (!e.target) {
                store.setSelectedElement(null);
            }
        });

        store.setCanvas(canvas);
        fabric.util.requestAnimFrame(function render() {
            canvas.renderAll();
            fabric.util.requestAnimFrame(render);
        });
    }, [canvasWidth, canvasHeight]); // เรียกใช้ useEffect เมื่อ canvasWidth หรือ canvasHeight เปลี่ยนแปลง


    return (
        <>
            <Navbar />
            <div className="grid grid-rows-[500px] grid-cols-[_72px_300px_1fr_350px] bg-gray-900">
                <div className="tile row-start-1 col-start-1 flex flex-col ">
                    <Menu />
                </div>
                <div className=" col-start-2 row-start-1 flex flex-col overflow-scroll">
                    <Resources />
                </div>
                <div id="grid-canvas-container" className="col-start-3 bg-slate-100 flex justify-center items-center overflow-hidden">
                    <div className="canvas-container" style={{ border: '1px solid black' }}>
                        <canvas id="canvas" style={{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }} />
                    </div>
                </div>
                <div className="col-start-4 row-start-1 flex flex-col justify-center items-center bg-slate-200 overflow-scroll">
                    <Toolsobject />
                </div>
            </div>
            <div className="grid grid-rows-[500px] grid-cols-[322px_1fr]">
                <div className="col-start-2 row-start-1 relative px-[10px] py-[4px] overflow-scroll bg-slate-200">
                    <TimeLine />
                </div>
                <div className="col-start-1 row-start-1">
                    <ElementsPanel />
                </div>
            </div>
        </>
    );
});
