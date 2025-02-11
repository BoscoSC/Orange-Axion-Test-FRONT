"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  LoginBox,
  ButtonContainer,
  CheckboxShowPasswordContainer,
} from "../styles/LoginStyles.js";
import InputField from "./InputField.js";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    if (email === "" || password === "") {
      alert("Preencha os campos antes de continuar!");
    }
  }

  return (
    <LoginBox>
      <Image src="/assets/logo.png" alt="" width={230} height={40} priority />

      <div>
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
        <CheckboxShowPasswordContainer>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)} // Alterna o estado
          />
          <p>Mostrar a senha</p>
        </CheckboxShowPasswordContainer>
      </div>

      <p style={{ fontWeight: 600 }}>Problemas para acessar sua conta?</p>

      <ButtonContainer>
        <button onClick={handleLogin}>Acessar</button>
        <span>
          <hr />
          ou
          <hr />
        </span>
        <button onClick={() => router.push("/register")}>Cadastrar</button>
      </ButtonContainer>
    </LoginBox>
  );
}
