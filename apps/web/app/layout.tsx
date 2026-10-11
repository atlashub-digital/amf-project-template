import type { CSSProperties, ReactNode } from "react";
import { themeCssVariables } from "@atlashub/amf-experience-core";
import { project, projectTheme } from "@amf/project-config";
import "./globals.css";

export const metadata = {
  title: project.name,
  description: "AMF project template"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const style = themeCssVariables(projectTheme) as CSSProperties;

  return (
    <html lang={project.locale}>
      <body style={style}>{children}</body>
    </html>
  );
}
