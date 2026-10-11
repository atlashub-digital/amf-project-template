import Fastify from "fastify";

export function buildApp() {
  const app = Fastify({ logger: true });

  app.get("/health", async () => ({
    status: "ok",
    service: "amf-project-api"
  }));

  app.get("/v1/project", async () => ({
    data: {
      id: process.env.AMF_PROJECT_ID ?? "amf-demo",
      environment: process.env.NODE_ENV ?? "development"
    }
  }));

  return app;
}
