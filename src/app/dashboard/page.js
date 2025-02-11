"use client";
import { DashboardContainer } from "@/styles/DashboardStyles";
import Header from "@/components/dashboard/Header";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      redirect("/");
    }
  }, []);

  return (
    <DashboardContainer>
      <Header />
    </DashboardContainer>
  );
}
