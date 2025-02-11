"use client";
import { ButtonCategory, NavbarContainer } from "@/styles/DashboardStyles";
import { useCategory } from "@/context/CategoryContext.js";

export default function Navbar() {
  const { category, setCategory } = useCategory();

  return (
    <NavbarContainer>
      <ButtonCategory
        onClick={() => setCategory("foods")}
        $active={category === "foods"}
      >
        FOODS
      </ButtonCategory>
      <ButtonCategory
        onClick={() => setCategory("people")}
        $active={category === "people"}
      >
        PEOPLE
      </ButtonCategory>
      <ButtonCategory
        onClick={() => setCategory("places")}
        $active={category === "places"}
      >
        PLACES
      </ButtonCategory>
    </NavbarContainer>
  );
}
