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

  div {
    gap: 10px;
  }

  input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1px solid #4a4a4a;
    margin-bottom: 0.6rem;
  }
`;

export const InputContainerSvg = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 25%;
    right: 10px;
    width: 15px;
  }
`;

export const CheckboxShowPasswordContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 22px;
  gap: 0.3rem;

  color: #4a4a4a;

  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    user-select: none;
    cursor: pointer;
    padding: 0;
    width: 10px;
    height: 10px;
    margin: 0;
    border: 1px solid black;
    border-radius: 0;
    position: relative;

    &:checked::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #4a4a4a;
    }
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

export const ButtonPrimary = styled.button`
  cursor: pointer;
  width: 100%;
  background-image: linear-gradient(to right, #ae23a9, #dc4e1b);
  padding: 0.8rem;
  border: none;

  color: #ffffff;
  font-weight: 600;
`;

export const ButtonSecondary = styled.button`
  padding: 0.8rem;
  width: 100%;
  background-color: transparent;
  border: 1px solid #9b9b9b;
  color: #4a4a4a;
`;
