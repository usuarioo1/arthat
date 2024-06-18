import { Actor } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartContextProvider } from "@/contexts/CartContext";

const inter = Actor({ weight:'400', subsets: ["latin"] });

export const metadata = {
  title: "Arthat",
  description: "Alta joyería",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartContextProvider>
      <body className={inter.className + " bg-white"}><Navbar />{children}<Footer /></body>
      </CartContextProvider>
    </html>
  );
}
