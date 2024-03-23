import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { Providers } from "@/redux/provider";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GoaBizzle",
  description: "It is a platform where you can find and add your property listing services in Goa",
};

const sampleLinks = [
  { text: 'Listings', href: '/listings' },
  { text: 'Services', href: '/services' },
  { text: 'About Us', href: '/about' },
  { text: 'Contact', href: '/contact' }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
       <Providers>
          {children}
       </Providers>
      </body>
    </html>
  );
}
