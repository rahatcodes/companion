import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EdConvo",
  description: "AI-powered educational companion platform with voice interactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#00d4ff' } }}>
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <header>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
