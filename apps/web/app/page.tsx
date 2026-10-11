import Link from "next/link";
import { project, projectModules } from "@amf/project-config";
import { moduleEnabled } from "@atlashub/amf-experience-core";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="eyebrow">AMF PROJECT TEMPLATE · v0.1</div>
        <h1>{project.name}</h1>
        <p>
          Uma base modular em que design, conteúdo e capacidades podem variar
          por projeto sem reescrever os fundamentos.
        </p>
        <div className="actions">
          {moduleEnabled(projectModules, "library") && (
            <Link className="button primary" href="/library">
              Abrir Library
            </Link>
          )}
          <a className="button secondary" href="#modules">
            Ver módulos
          </a>
        </div>
      </section>

      <section className="section" id="modules">
        <div className="eyebrow">COMPOSABLE BY DESIGN</div>
        <h2>Um projeto, apenas os módulos de que precisa.</h2>
        <div className="grid">
          {Object.entries(projectModules).map(([key, value]) => {
            const enabled =
              typeof value === "boolean" ? value : Boolean(value?.enabled);
            return (
              <article className="card" key={key}>
                <strong>{key}</strong>
                <span>{enabled ? "ativo" : "desativado"}</span>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
