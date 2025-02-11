import Image from "next/image";
import { HeaderContainer } from "@/styles/DashboardStyles";

export default function Header() {
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
