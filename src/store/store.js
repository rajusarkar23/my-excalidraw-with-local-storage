import { create } from "zustand";
import isEqual from "lodash/isEqual";

// Zustand store
const useElementsStore = create((set, get) => ({

  elements: JSON.parse(localStorage.getItem("data")) || [],

  setElements: (updatedElements) => {
    const currentElements = get().elements;
    if (!isEqual(currentElements, updatedElements)) {
      set({ elements: updatedElements });
      localStorage.setItem("data", JSON.stringify(updatedElements));
    }
  },
}));

export default useElementsStore;
