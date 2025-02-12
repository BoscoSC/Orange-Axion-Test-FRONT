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
  Terms,
  LabelInput,
  LabelCheckbox,
  InputContainer,
  FormContainer,
  FormContent,
  ProblemsText,
} from "../styles/LoginStyles.js";
import InputField from "./InputField.js";
import login from "@/services/auth.js";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      redirect("/dashboard");
    }
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Preencha os campos antes de continuar!");
    } else {
      try {
        const res = await login({ identifier: email, password });
        localStorage.setItem("jwt", res.jwt);
        router.push("/dashboard");
      } catch (error) {
        alert("Erro ao fazer login");
      }
    }
  }

  return (
    <LoginBox onSubmit={handleLogin}>
      <Image src="/assets/logo.png" alt="" width={230} height={30} priority />

      <FormContainer>
        <FormContent>
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
        </FormContent>

        <CheckboxShowPasswordContainer>
          <input
            id="checkbox"
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <LabelCheckbox htmlFor="checkbox">Mostrar a senha</LabelCheckbox>
        </CheckboxShowPasswordContainer>
      </FormContainer>

      <ProblemsText>Problemas para acessar sua conta?</ProblemsText>

      <ButtonContainer>
        <ButtonPrimary type="submit">Acessar</ButtonPrimary>
        <span>
          <hr />
          ou
          <hr />
        </span>
        <ButtonSecondary type="button" onClick={() => router.push("/register")}>
          Cadastrar
        </ButtonSecondary>
        <Terms>Termos de uso • Política de privacidade</Terms>
      </ButtonContainer>
    </LoginBox>
  );
}
