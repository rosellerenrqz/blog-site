import React from "react";
import "../globals.css";

export const metadata = {
  title: "Next.JS",
  description: "Generated By Next.JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
