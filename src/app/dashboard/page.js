"use client";
import {
  DashboardContainer,
  Main,
  CategoryTitle,
} from "@/styles/DashboardStyles";
import Header from "@/components/dashboard/Header.js";
import CategoryList from "@/components/dashboard/CategoryList.js";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useCategory } from "@/context/CategoryContext.js";

export default function Dashboard() {
  const { category } = useCategory();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      redirect("/");
    }
  }, []);

  return (
    <DashboardContainer>
      <Header />
      <Main>
        <CategoryTitle>{"LIST OF " + category.toUpperCase()}</CategoryTitle>
        <hr />
        <CategoryList />
      </Main>
    </DashboardContainer>
  );
}
