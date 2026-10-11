import { notFound } from "next/navigation";
import { createReaderModel } from "@atlashub/amf-experience-core";
import { contentManifest } from "@amf/project-content";

function markdownText(body: unknown) {
  if (!body || typeof body !== "object") return "";
  const candidate = body as { format?: string; markdown?: string };
  return candidate.format === "markdown-inline" ? candidate.markdown ?? "" : "";
}

export default async function ReaderPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const publication = contentManifest.publications.find(
    (item) => item.slug === slug
  );
  if (!publication) notFound();

  const reader = createReaderModel(publication);

  return (
    <main className="reader">
      <a href="/library" className="back">← Library</a>
      <div className="eyebrow">{publication.type.toUpperCase()}</div>
      <h1>{publication.title}</h1>
      {publication.subtitle && <p className="lede">{publication.subtitle}</p>}

      <nav className="toc" aria-label="Índice">
        {reader.chapters.map((chapter) => (
          <a href={`#${chapter.slug}`} key={chapter.id}>
            {chapter.title}
          </a>
        ))}
      </nav>

      {reader.chapters.map((chapter) => (
        <article id={chapter.slug} className="chapter" key={chapter.id}>
          <h2>{chapter.title}</h2>
          <p>{markdownText(chapter.body)}</p>
        </article>
      ))}
    </main>
  );
}
