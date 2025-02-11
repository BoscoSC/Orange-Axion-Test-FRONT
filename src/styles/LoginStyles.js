import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10%;
  height: 100vh;
  background-image: url("/assets/bg.jpg");
  background-size: 900px;
  background-position: right;
  background-repeat: no-repeat;
`;

export const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  gap: 40px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);
  font-size: 1rem;

  div {
    gap: 10px;
  }

  input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.6rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  hr {
    width: 100%;
    border: 1px solid #909090;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
