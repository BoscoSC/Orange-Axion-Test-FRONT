"use client";
import { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import Image from "next/image";
import {
  LoginBox,
  CheckboxShowPasswordContainer,
  ButtonContainer,
  ButtonPrimary,
  ButtonSecondary,
  FormContainer,
  FormContent,
  InputContainer,
  LabelInput,
  LabelCheckbox,
  Terms,
  ProblemsText,
} from "../styles/LoginStyles.js";
import InputField from "./InputField.js";
import { register } from "@/services/auth.js";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      redirect("/dashboard");
    }
  }, []);

  async function handleRegister(e) {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Preencha os campos antes de continuar!");
    } else if (password === confirmPassword) {
      try {
        await register({ username: name, email, password });
        router.push("/");
      } catch (error) {
        alert("Nome ou Email ja utilizados");
      }
    } else {
      alert("As senhas não batem!");
    }
  }

  return (
    <LoginBox onSubmit={handleRegister}>
      <Image src="/assets/logo.png" alt="" width={230} height={30} priority />

      <FormContainer>
        <FormContent>
          <InputContainer>
            <LabelInput htmlFor="name">Name</LabelInput>
            <InputField
              id="name"
              type="text"
              placeholder="Name"
              src="/assets/mail.png"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <LabelInput htmlFor="email">Email</LabelInput>
            <InputField
              id="email"
              type="email"
              placeholder="seunome@email.com"
              src="/assets/mail.png"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <LabelInput htmlFor="password">Password</LabelInput>
            <InputField
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              src="/assets/lock.png"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <LabelInput htmlFor="confirmPassword">Confirm Password</LabelInput>
            <InputField
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              src="/assets/lock.png"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputContainer>
        </FormContent>

        <CheckboxShowPasswordContainer>
          <input
            id="checkbox"
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <LabelCheckbox htmlFor="checkbox">Mostrar as senhas</LabelCheckbox>
        </CheckboxShowPasswordContainer>
      </FormContainer>

      <ProblemsText>Problemas para acessar sua conta?</ProblemsText>

      <ButtonContainer>
        <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
        <span>
          <hr />
          ou
          <hr />
        </span>
        <ButtonSecondary type="button" onClick={() => router.push("/")}>
          Acessar
        </ButtonSecondary>
      </ButtonContainer>

      <Terms>Termos de uso • Política de privacidade</Terms>
    </LoginBox>
  );
}
