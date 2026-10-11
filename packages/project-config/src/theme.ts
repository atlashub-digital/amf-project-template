import { defineTheme } from "@atlashub/amf-experience-core";

export const projectTheme = defineTheme({
  id: "amf-demo",
  mode: "light",
  colors: {
    background: "#f7f5ef",
    foreground: "#161616",
    surface: "#ffffff",
    surfaceForeground: "#161616",
    primary: "#111827",
    primaryForeground: "#ffffff",
    accent: "#2563eb",
    accentForeground: "#ffffff",
    muted: "#6b7280",
    border: "#dedbd2"
  },
  typography: {
    display: "Georgia, 'Times New Roman', serif",
    body: "Arial, Helvetica, sans-serif"
  },
  radius: {
    sm: "0.5rem",
    md: "0.9rem",
    lg: "1.4rem",
    pill: "999px"
  }
});
