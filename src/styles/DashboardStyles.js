import styled from "styled-components";

export const DashboardContainer = styled.div`
  min-height: 100vh;
`;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17%;
  height: 100px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;

  div {
    cursor: pointer;
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const ButtonCategory = styled.button`
  padding: 1.5rem 1rem;
  color: #4a4a4a;
  font-size: 18px;
  font-weight: ${({ $active }) => ($active ? "700" : "300")};
  cursor: pointer;
`;

export const Main = styled.main`
  margin-top: 100px;
  padding: 40px 17%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  hr {
    background: linear-gradient(to right, #ae23a9, #dc4e1b);
    height: 5px;
    border: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  button {
    cursor: pointer;
    padding: 0 10px;
  }

  svg {
    font-size: 20px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 40px;

  position: relative;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  z-index: 1;

  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));

  width: 300px;
  height: 150px;
`;

export const CategoryItem = styled.div`
  height: 300px;
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);

  position: relative;
`;

export const ItemName = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  color: white;

  font-size: 28px;
  font-weight: 700;

  z-index: 2;
`;
