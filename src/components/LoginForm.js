"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LoginBox, ButtonContainer } from "../styles/LoginStyles";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <input
          type="email"
          placeholder="seunome@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon="/assets/mail.png"
        />
      </div>

      <div>
        <p style={{ fontWeight: 600 }}>Password</p>
        <input
          type="email"
          placeholder="seunome@email.com"
          icon="/assets/mail.png"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div style={{ fontWeight: 600 }}>Problemas para acessar sua conta?</div>

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
