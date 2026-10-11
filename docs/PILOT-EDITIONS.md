# Pilot 01 — AtlasHub Editions

## Goal

Reproduce the current Editions experience on the AMF template without changing the public production application.

The pilot is successful when:

1. Editions content is represented through AMF Content Schema.
2. Editions theme is implemented only in project-owned theme/UI files.
3. WebReader uses AMF Experience Core contracts.
4. The resulting preview preserves editorial quality and canonical routes.
5. No Editions production domain is switched until visual and content parity is approved.

## Non-goals

- no commerce migration in Pilot 01;
- no auth requirement;
- no production cutover;
- no automatic merge by AMF.

## Evidence

The pilot PR should include:
- content conversion report;
- route parity list;
- screenshots;
- CI result;
- accessibility notes;
- schema validation result.
