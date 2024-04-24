
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";


import App from "./App";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMSTEL CAR location de voiture rabat",
  description: "Agence de location de voiture de tout type de game à Rabat au Maroc",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
 
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={clsx(inter.className, 'bg-background w-full h-screen')}>
       <App>{children}</App>
      </body>
    </html>
  );
}
