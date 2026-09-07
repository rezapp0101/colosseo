import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "COLOSSEO | Experience the Soul of Italy", description: "An Italian fine-dining concept inspired by Rome." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
