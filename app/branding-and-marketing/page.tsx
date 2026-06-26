import React from "react";
import type { Metadata } from "next";
import BrandingMarketingClient from "./BrandingMarketingClient";

export const metadata: Metadata = {
  title: "Branding & Marketing Services | Zoiko Digital",
  description:
    "Strategy-led identity, design systems, content campaigns, and performance marketing designed to build trust and move core business metrics.",
  keywords: [
    "Branding",
    "Brand Strategy",
    "Brand Identity",
    "Logo Design",
    "Design Systems",
    "Performance Marketing",
    "Campaign Management",
    "Creative Production"
  ]
};

export default function BrandingMarketingPage() {
  return <BrandingMarketingClient />;
}
