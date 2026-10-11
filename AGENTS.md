# AGENTS.md

## Purpose

This repository is the reference scaffold used by Codex and later by AMF to create project applications.

## Design-safe zones

Codex may freely redesign:
- apps/web/app/page.tsx
- apps/web/app/globals.css
- apps/web/components/
- packages/project-config/src/theme.ts
- marketing copy and project-owned assets

provided accessibility and configured module behavior remain intact.

## Protected zones

Changes to these areas require explicit review:
- access and entitlement adapters;
- auth/session logic;
- payment/webhook code;
- subscription state;
- database migrations;
- conversation safety;
- deployment/provisioning scripts.

## Rules

- Never put secrets or live provider credentials in the repository.
- Never hardcode a project's price into WebReader content.
- Never infer paid access from frontend state.
- Keep project branding out of AMF core packages.
- Content changes should pass schema validation before merge.
- Every generated project must ship with CI and smoke-test hooks.
