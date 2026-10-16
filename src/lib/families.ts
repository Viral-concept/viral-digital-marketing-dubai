import type { Family } from "@/content/types";

/** Each capability family owns one accent colour across the whole site. */
export const familyColor: Record<Family, { text: string; bg: string; border: string; hex: string; deep: string }> = {
  growth: { text: "text-ember", bg: "bg-ember", border: "border-ember", hex: "#ff6a3d", deep: "#a3361a" },
  build: { text: "text-sky", bg: "bg-sky", border: "border-sky", hex: "#8fb2ff", deep: "#3457b8" },
  intelligence: { text: "text-lagoon", bg: "bg-lagoon", border: "border-lagoon", hex: "#5fe0c6", deep: "#0f6b5c" },
};

export const families: Family[] = ["growth", "build", "intelligence"];
