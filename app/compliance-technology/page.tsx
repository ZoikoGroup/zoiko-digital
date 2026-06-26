import React from "react";
import type { Metadata } from "next";
import ComplianceTechnologyClient from "./ComplianceTechnologyClient";

export const metadata: Metadata = {
  title: "Compliance Technology & GRC Solutions | Zoiko Digital",
  description:
    "Learn about GRC, RegTech, continuous compliance monitoring, automated evidence collection, and how software turns audits from a yearly scramble into a continuous process.",
  keywords: [
    "Compliance Technology",
    "GRC",
    "RegTech",
    "Continuous Compliance",
    "Audit Trail",
    "SOC 2",
    "ISO 27001",
    "Compliance Software"
  ]
};

export default function ComplianceTechnologyPage() {
  return <ComplianceTechnologyClient />;
}
