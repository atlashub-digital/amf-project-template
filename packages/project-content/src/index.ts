import {
  ContentManifestSchema,
  PublicationSchema,
} from "@atlashub/amf-content-schema";

export const demoPublication = PublicationSchema.parse({
  schemaVersion: "0.1",
  id: "demo-001",
  slug: "bem-vindo",
  type: "guide",
  status: "published",
  locale: "pt-BR",
  title: "Bem-vindo ao AMF WebReader",
  subtitle: "Um conteúdo, muitos temas e produtos",
  description:
    "Fixture mínima para validar que conteúdo, tema e aplicação são independentes.",
  authors: ["AMF"],
  tags: ["demo", "webreader"],
  chapters: [
    {
      id: "why",
      slug: "por-que",
      title: "Por que separar conteúdo e design?",
      order: 1,
      body: {
        format: "markdown-inline",
        markdown:
          "O conteúdo deve sobreviver a uma mudança completa de identidade visual. O projeto escolhe o tema; o reader interpreta o mesmo contrato."
      }
    },
    {
      id: "modules",
      slug: "modulos",
      title: "Módulos ativáveis",
      order: 2,
      body: {
        format: "markdown-inline",
        markdown:
          "Library, commerce, community, attendant e companion podem ser ativados por projeto sem transformar todos os produtos na mesma aplicação."
      }
    }
  ],
  media: [],
  access: {
    mode: "public"
  }
});

export const contentManifest = ContentManifestSchema.parse({
  schemaVersion: "0.1",
  project: "amf-demo",
  publications: [demoPublication],
  collections: [
    {
      schemaVersion: "0.1",
      id: "starter",
      slug: "starter",
      title: "Starter Library",
      publicationRefs: [demoPublication.id],
      tags: ["demo"]
    }
  ]
});
