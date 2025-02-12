"use client";
import {
  DashboardContainer,
  Main,
  CategoryTitle,
  TitleContainer,
} from "@/styles/DashboardStyles";
import Header from "@/components/dashboard/Header.js";
import CategoryList from "@/components/dashboard/CategoryList.js";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useCategory } from "@/context/CategoryContext.js";
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";

export default function Dashboard() {
  const { category, sort, setSort } = useCategory();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      redirect("/");
    }
  }, []);

  function handleSort() {
    if (sort === undefined || sort === "desc") {
      setSort("asc");
    } else {
      setSort("desc");
    }
  }

  return (
    <DashboardContainer>
      <Header />
      <Main>
        <TitleContainer>
          <CategoryTitle>{"LIST OF " + category.toUpperCase()}</CategoryTitle>
          <button onClick={handleSort}>
            {sort !== "asc" ? <FaSortAlphaUp /> : <FaSortAlphaDown />}
          </button>
        </TitleContainer>
        <hr />
        <CategoryList />
      </Main>
    </DashboardContainer>
  );
}
