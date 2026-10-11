import { readFile } from "node:fs/promises";

const manifest = JSON.parse(await readFile("project.manifest.json", "utf8"));

for (const field of ["schemaVersion", "id", "name", "locale", "modules"]) {
  if (!manifest[field]) throw new Error(`Missing project manifest field: ${field}`);
}

if (manifest.schemaVersion !== "0.1") {
  throw new Error(`Unsupported manifest version: ${manifest.schemaVersion}`);
}

console.log(`manifest ok: ${manifest.id}`);
