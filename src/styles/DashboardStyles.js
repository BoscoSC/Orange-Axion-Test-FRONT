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
`;

export const CategoryTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;
