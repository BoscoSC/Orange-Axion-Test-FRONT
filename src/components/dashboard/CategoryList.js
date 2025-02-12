"use client";
import { useEffect, useState } from "react";
import {
  ListContainer,
  CategoryItem,
  ItemName,
} from "@/styles/DashboardStyles.js";
import Image from "next/image";
import getCategoryList from "@/services/categories";
import { useCategory } from "@/context/CategoryContext.js";

export default function CategoryList() {
  const [items, setItems] = useState([]);
  const { category, sort } = useCategory();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    getCategoryList(category, jwt, sort).then((res) => {
      setItems(res);
    });
  }, [category, sort]);

  return (
    <ListContainer>
      {items.map((item) => (
        <CategoryItem key={item.id}>
          <Image
            src={`http://localhost:1337${item.link[0].url}`}
            alt={item.name}
            width={300}
            height={300}
          />
          <ItemName>{item.name}</ItemName>
        </CategoryItem>
      ))}
    </ListContainer>
  );
}
