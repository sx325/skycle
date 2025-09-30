import "@/styles/globals.css";

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import type { ComponentType, ReactNode } from "react";
import Providers from "@/app/providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Skycle.app — Generate your friends Bluesky circle easily",
  description: "Generate your circle with avatars of your friends Bluesky easily",
  metadataBase: new URL("https://skycle.app"),
  icons: "/favicon.ico",
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Skycle.app — Generate your Bluesky circle easily",
      },
    ],
  },
};

const CookieConsent: ComponentType = dynamic(() => import("@/components/cookie-consent"), {
  ssr: false,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full select-none">
        <Providers>
          <div vaul-drawer-wrapper="" className="h-full">
            {children}
          </div>
          <Toaster />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
