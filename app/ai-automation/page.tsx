import React from "react";
import type { Metadata } from "next";
import AIAutomationClient from "./AIAutomationClient";

export const metadata: Metadata = {
  title: "AI Automation & Workflow Agent Solutions | Zoiko Digital",
  description:
    "We build custom AI agents, RAG assistants, and intelligent workflow automations that eliminate repetitive busywork and scale your operations safely.",
  keywords: [
    "AI Automation",
    "AI Agents",
    "RAG Assistants",
    "Workflow Automation",
    "Document Processing",
    "AI Governance",
    "Business Process Automation"
  ]
};

export default function AIAutomationPage() {
  return <AIAutomationClient />;
}
