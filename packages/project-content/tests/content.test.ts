import assert from "node:assert/strict";
import { test } from "node:test";
import { contentManifest, demoPublication } from "../src/index.js";

test("demo publication is present in manifest", () => {
  assert.equal(contentManifest.publications[0]?.id, demoPublication.id);
});
