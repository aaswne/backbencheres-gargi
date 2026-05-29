import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backbenchers Gargi | Budget Stay Near Kasol",
  description:
    "Backbenchers Gargi is a backpacker-friendly cafe and budget stay in Gargi near Kasol. Kerala homely food, mountain views, and beds from ₹299.",
  keywords: [
    "Backbenchers Gargi",
    "Kasol stay",
    "Budget stay in Kasol",
    "Gargi village",
    "Kerala food in Kasol",
    "Backpacker hostel Himachal",
    "Cheap stay near Kasol",
  ],
  authors: [{ name: "Backbenchers Gargi" }],
  creator: "Backbenchers Gargi",
  openGraph: {
    title: "Backbenchers Gargi",
    description:
      "Stay cheap. Eat homely. Wake up to snowy mountain views — from just ₹299.",
    url: "https://backbenchersgargi.com",
    siteName: "Backbenchers Gargi",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}