"use client";
import { ButtonCategory, NavbarContainer } from "@/styles/DashboardStyles";

export default function Navbar() {
  return (
    <NavbarContainer>
      <ButtonCategory>FOODS</ButtonCategory>
      <ButtonCategory>PEOPLE</ButtonCategory>
      <ButtonCategory>PLACES</ButtonCategory>
    </NavbarContainer>
  );
}
