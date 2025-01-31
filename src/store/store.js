"use client"

import { create } from "zustand"
import isEqual from "lodash/isEqual"

// Helper function to safely access localStorage
const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    try {
      const storedData = localStorage.getItem("data")
      return storedData ? JSON.parse(storedData) : []
    } catch (error) {
      console.error("Error reading from localStorage:", error)
      return []
    }
  }
  return []
}

const useElementsStore = create((set, get) => ({
  elements: [],  // Start with empty array
  initialized: false,
  
  // Initialize the store on the client side
  initializeStore: () => {
    if (!get().initialized) {
      const savedElements = getLocalStorage()
      set({ elements: savedElements, initialized: true })
    }
  },

  setElements: (updatedElements) => {
    const currentElements = get().elements
    if (!isEqual(currentElements, updatedElements)) {
      set({ elements: updatedElements })
      if (typeof window !== "undefined") {
        localStorage.setItem("data", JSON.stringify(updatedElements))
      }
    }
  },
}))

export default useElementsStore