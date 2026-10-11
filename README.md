# AMF Project Template

Reference scaffold for AMF-generated projects.

The template is intentionally modular: branding and homepage composition may change radically, while content contracts, access boundaries and infrastructure conventions stay predictable.

## v0.1

```text
apps/
  web/          Next.js public/member experience
  api/          Fastify project API

packages/
  project-config/
  project-content/

automation/
infra/

project.manifest.json
```

## Run

```bash
npm install
npm run dev:web
npm run dev:api
```

## Validate

```bash
npm run typecheck
npm test
npm run build
```

First pilot target: **AtlasHub Editions**.
