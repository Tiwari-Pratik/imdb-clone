import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import TopicBar from "./components/TopicBar";
import { josefin } from "./fonts";

export const metadata: Metadata = {
  title: "MovieChoice",
  description: "Find the movies you like",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Header />
        <TopicBar />
        {children}
      </body>
    </html>
  );
}
