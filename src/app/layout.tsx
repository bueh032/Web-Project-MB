import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight:"300",
  subsets: ['latin'],
  variable: "--font-roboto",
  
});
const roboto_Mono = Roboto_Mono({
  subsets: ['latin'],
  variable: "--font-roboto-mono",
  
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
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto_Mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
