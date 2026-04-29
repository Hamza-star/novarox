import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Novaroxe | Strategic Digital Marketing Agency",
    template: "%s | Novaroxe",
  },
  description:
    "Novaroxe provides high-ROI digital solutions including Meta Ads, Google Ads, UI/UX design, and conversion-focused funnels.",
  keywords: [
    "Digital Marketing",
    "Meta Ads",
    "Google Ads",
    "UI/UX Design",
    "Email Marketing",
    "Novaroxe",
  ],
  authors: [{ name: "Novaroxe Team" }],
  creator: "Novaroxe",
  publisher: "Novaroxe",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader />
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
