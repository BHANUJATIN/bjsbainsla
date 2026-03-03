import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Bhanu Singh - GTM Automation Engineer",
  description:
    "I design and build automated outbound and data pipelines for recruitment firms, fintech companies, and nonprofits. GTM automation, outbound infrastructure, and recruitment systems.",
  keywords: [
    "GTM automation",
    "outbound infrastructure",
    "recruitment automation",
    "Clay.com",
    "lead generation",
    "data pipelines",
  ],
  authors: [{ name: "Bhanu Singh" }],
  openGraph: {
    title: "Bhanu Singh - GTM Automation Engineer",
    description:
      "I design and build automated outbound and data pipelines for recruitment firms, fintech companies, and nonprofits.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
