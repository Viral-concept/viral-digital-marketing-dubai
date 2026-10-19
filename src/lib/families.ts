import type { Family } from "@/content/types";

/** Each capability family owns one accent colour across the whole site. */
export const familyColor: Record<Family, { text: string; bg: string; border: string; hex: string; deep: string }> = {
  growth: { text: "text-ember", bg: "bg-ember", border: "border-ember", hex: "#5b2eff", deep: "#b9a6ff" },
  build: { text: "text-sky", bg: "bg-sky", border: "border-sky", hex: "#d1146b", deep: "#ff8fc1" },
  intelligence: { text: "text-lagoon", bg: "bg-lagoon", border: "border-lagoon", hex: "#0a7c70", deep: "#5fe0c6" },
};

export const families: Family[] = ["growth", "build", "intelligence"];
