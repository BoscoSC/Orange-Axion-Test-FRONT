import { Open_Sans } from "next/font/google";
import "./globals.css";
import { CategoryProvider } from "@/context/CategoryContext";

const openSans = Open_Sans({
  weight: ["300", "600", "700"],
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Teste Técnico Axion",
  description: "Teste técnico para vaga de estágio de Desenvolvedor FullStack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <CategoryProvider>
        <body className={`${openSans.variable}`}>{children}</body>
      </CategoryProvider>
    </html>
  );
}
