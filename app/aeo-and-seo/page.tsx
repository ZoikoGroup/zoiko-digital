import React from "react";
import type { Metadata } from "next";
import AeoAndSeoClient from "./AeoAndSeoClient";

export const metadata: Metadata = {
  title: "SEO & AEO Services | Zoiko Digital",
  description:
    "Optimize your brand for traditional search engines (SEO) and modern AI answer engines (AEO) to drive visibility and growth.",
  keywords: [
    "SEO",
    "AEO",
    "Search Engine Optimization",
    "Answer Engine Optimization",
    "Technical SEO",
    "Content Strategy",
    "Structured Data",
    "Schema Markup",
    "Google Rankings"
  ]
};

export default function AeoAndSeoPage() {
  return <AeoAndSeoClient />;
}
