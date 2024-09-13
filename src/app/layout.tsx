import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/providers";

import { Contact } from "@/components/contact";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Garcho AI",
  description: "Your AI-based chatbot",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden scroll-smooth font-workSans bg-neutral-900 text-secondary-100"
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4NCW4CNQTZ"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4NCW4CNQTZ');
          `}
        </Script>
      </head>
      <body>
        <AppProviders>
          {children}
          <Contact />
        </AppProviders>
      </body>
    </html>
  );
}
