import { Actor } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartContextProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import SocialMediaIcons from "@/components/Rrss";

const inter = Actor({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Arthat",
  description: "Alta joyería",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <AuthProvider>
        <CartContextProvider>
          <body className={inter.className + " bg-white"}><Navbar />  <SocialMediaIcons />{children} <SocialMediaIcons /><Footer /></body>
        </CartContextProvider>
      </AuthProvider>
    </html>
  );
}
