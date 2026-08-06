import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Stedile | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer — React, TypeScript, Node.js and AI integration. 10+ years building web applications for global clients.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
