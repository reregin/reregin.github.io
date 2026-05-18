import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Regina George — ML Engineer & Data Enthusiast",
  description:
    "Portfolio of Regina Maria Samantha George — Informatics Engineering student, Machine Learning Engineer, and Data Mining enthusiast based in North Sulawesi, Indonesia.",
  keywords: [
    "machine learning",
    "data mining",
    "portfolio",
    "Regina George",
    "informatics engineering",
    "data science",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
