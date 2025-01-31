"use client"

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import useElementsStore from "../store/store.js"

const ExcalidrawComponent = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
)

export default function ExcalidrawComp() {
  const elements = useElementsStore((state) => state.elements)
  const setElements = useElementsStore((state) => state.setElements)
  const initializeStore = useElementsStore((state) => state.initializeStore)

  useEffect(() => {
    initializeStore()
  }, [initializeStore])

  const handleElementsChange = (updatedElements) => {
    const updatedElementsCopy = updatedElements.map((el) => ({ ...el }))
    setElements(updatedElementsCopy)
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ExcalidrawComponent
        initialData={{ elements }}
        onChange={handleElementsChange}
      />
    </div>
  )
}