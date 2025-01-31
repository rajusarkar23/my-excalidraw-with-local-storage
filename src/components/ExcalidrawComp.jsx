"use client";
import { Excalidraw } from "@excalidraw/excalidraw";
import useElementsStore from "../store/store.js";
import { useEffect } from "react";

function ExcalidrawComp() {
  const elements = useElementsStore((state) => state.elements);
  const setElements = useElementsStore((state) => state.setElements);
  const handleElementsChange = (updatedElements) => {
    const updatedElementsCopy = updatedElements.map((el) => ({ ...el }));
    setElements(updatedElementsCopy);
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Excalidraw
        initialData={{ elements }}
        onChange={handleElementsChange}
      />
    </div>
  );
}

export default ExcalidrawComp;
