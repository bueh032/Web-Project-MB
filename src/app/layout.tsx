import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar";
import React from "react";
import Board from "../../components/board";

const ubuntu = Ubuntu({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-Ubuntu",
});
const ubuntu_Mono = Ubuntu_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-Ubuntu_Mono",
});

export const metadata: Metadata = {
  title: "Kanban-board",
  description: "Web Project by Max",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${ubuntu.variable} ${ubuntu_Mono.variable} antialiased bg-slate-500 `}>
          <Navbar />
          <Board />
          
        {children}
      </body>
    </html>
  );
}
