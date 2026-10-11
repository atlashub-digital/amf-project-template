# AMF automation boundary

v0.1 automation is intentionally read/validate-first.

Future AMF provisioning may:
1. instantiate this template;
2. write project manifest and theme;
3. configure content source;
4. create Vercel/VPS/Supabase/XPayments resources through explicit adapters;
5. run CI and smoke tests;
6. open a handoff report.

No automation should merge security-sensitive changes or create live charges without an explicit project policy.
