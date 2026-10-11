import {
  defineModules,
  defineProject,
} from "@atlashub/amf-experience-core";
import { projectTheme } from "./theme.js";

export const projectModules = defineModules({
  library: true,
  webreader: true,
  auth: false,
  commerce: false,
  community: false,
  programs: false,
  attendant: false,
  companion: false,
  analytics: true
});

export const project = defineProject({
  id: "amf-demo",
  name: "AMF Demo",
  locale: "pt-BR",
  modules: projectModules,
  theme: projectTheme
});

export { projectTheme };
