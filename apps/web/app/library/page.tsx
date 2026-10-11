import Link from "next/link";
import { contentManifest } from "@amf/project-content";

export default function LibraryPage() {
  return (
    <main className="section">
      <div className="eyebrow">LIBRARY</div>
      <h1>Conteúdo independente do tema.</h1>
      <div className="grid">
        {contentManifest.publications.map((publication) => (
          <article className="card" key={publication.id}>
            <span>{publication.type}</span>
            <h2>{publication.title}</h2>
            <p>{publication.description}</p>
            <Link href={`/read/${publication.slug}`}>Ler publicação →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
