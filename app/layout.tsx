import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Regina George",
  description:
    "Portfolio of Regina Maria Samantha George — ML Engineer, Web3 Builder, and Data Mining researcher. Building intelligent systems and on-chain products.",
  keywords: [
    "machine learning",
    "data mining",
    "portfolio",
    "Regina George",
    "informatics engineering",
    "data science",
    "web3",
    "on-chain",
    "systems",
    "deep learning",
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
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
