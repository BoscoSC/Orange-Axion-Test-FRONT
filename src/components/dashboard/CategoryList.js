"use client";
import { useEffect, useState } from "react";
import {
  ListContainer,
  CategoryItem,
  ItemName,
  ImageOverlay,
} from "@/styles/DashboardStyles.js";
import Image from "next/image";
import getCategoryList from "@/services/categories";
import { useCategory } from "@/context/CategoryContext.js";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

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
          <ImageOverlay />
          <Image
            src={`${BASE_URL}${item.link[0].url}`}
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
