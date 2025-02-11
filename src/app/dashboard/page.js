"use client";
import {
  DashboardContainer,
  Main,
  CategoryTitle,
} from "@/styles/DashboardStyles";
import Header from "@/components/dashboard/Header";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useCategory } from "@/context/CategoryContext.js";

export default function Dashboard() {
  const { category } = useCategory();

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      redirect("/");
    }
  }, []);

  return (
    <DashboardContainer>
      <Header />
      <Main>
        <CategoryTitle>{"LIST OF " + category.toUpperCase()}</CategoryTitle>
        <hr />
      </Main>
    </DashboardContainer>
  );
}
