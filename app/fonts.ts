import { Bricolage_Grotesque, DM_Sans } from "next/font/google";

export const dmSans = DM_Sans({
  // 300/light, 500/medium, 600/semibold, 700/bold
  weight: ["300", "500", "600", "700"],
});

export const dmSansItalic600 = DM_Sans({
  weight: "600",
  style: "italic",
});

export const bricolageGrotesque = Bricolage_Grotesque({
  weight: "700",
});
