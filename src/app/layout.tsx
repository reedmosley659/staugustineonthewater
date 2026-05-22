import { Suspense } from "react";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { StructuredData } from "@/components/StructuredData";
import { createRootMetadata } from "@/lib/metadata";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = createRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
