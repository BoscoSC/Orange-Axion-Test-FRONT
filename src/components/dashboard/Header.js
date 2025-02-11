"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HeaderContainer } from "@/styles/DashboardStyles";

export default function Header() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("jwt");
    router.push("/");
  }

  return (
    <HeaderContainer>
      <div onClick={() => logout()}>
        <Image
          src={"/assets/logo.png"}
          alt=""
          width={250}
          height={40}
          priority
        />
      </div>
    </HeaderContainer>
  );
}
