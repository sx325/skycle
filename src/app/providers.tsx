"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";
import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MainProvider } from "@/providers/main-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MainProvider>
      <TooltipProvider>{children}</TooltipProvider>
      <GoogleAnalytics trackPageViews />
    </MainProvider>
  );
}
