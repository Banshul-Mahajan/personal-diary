import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Global styles
import ClientLayout from "@/app/client-layout"; // Import the client-side layout

// ✅ Font configuration
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata for SEO and page title (Now it's correctly in a server component)
export const metadata: Metadata = {
  title: "My Personal Diary",
  description: "Secure and private diary application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout> {/* ✅ Now handles authentication */}
      </body>
    </html>
  );
}
