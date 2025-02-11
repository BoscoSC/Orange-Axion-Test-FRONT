"use client";
import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const useCategory = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("foods");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
