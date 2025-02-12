"use client";
import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const useCategory = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("foods");
  const [sort, setSort] = useState(undefined);

  return (
    <CategoryContext.Provider value={{ category, setCategory, sort, setSort }}>
      {children}
    </CategoryContext.Provider>
  );
};
