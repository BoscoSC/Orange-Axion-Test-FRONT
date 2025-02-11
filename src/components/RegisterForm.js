"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  LoginBox,
  CheckboxShowPasswordContainer,
  ButtonContainer,
  ButtonPrimary,
  ButtonSecondary,
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
        console.log({ username: name, email, password });
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

      <div>
        <p style={{ fontWeight: 600 }}>Name</p>
        <InputField
          type="text"
          placeholder="Name"
          src="/assets/mail.png"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p style={{ fontWeight: 600 }}>Email</p>
        <InputField
          type="email"
          placeholder="seunome@email.com"
          src="/assets/mail.png"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p style={{ fontWeight: 600 }}>Password</p>
        <InputField
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          src="/assets/lock.png"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p style={{ fontWeight: 600 }}>Confirm Password</p>
        <InputField
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          src="/assets/lock.png"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CheckboxShowPasswordContainer>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <p>Mostrar as senhas</p>
        </CheckboxShowPasswordContainer>
      </div>

      <p style={{ fontWeight: 600 }}>Problemas para acessar sua conta?</p>

      <ButtonContainer>
        <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
        <span>
          <hr />
          ou
          <hr />
        </span>
        <ButtonSecondary onClick={() => router.push("/")}>
          Acessar
        </ButtonSecondary>
      </ButtonContainer>
    </LoginBox>
  );
}
