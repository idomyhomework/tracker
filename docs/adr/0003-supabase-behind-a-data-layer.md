# Supabase as backend, behind our own data layer

We use Supabase (Postgres, Auth, RLS, Edge Functions) instead of a custom FastAPI backend because a solo developer would otherwise spend months on auth, sync and infra before shipping anything. Because we expect to move to our own server if the app grows, the app never calls Supabase directly from UI code: all reads and writes go through our own data layer, and the schema is plain Postgres with no Supabase-only features in the core tables, so a migration means swapping the layer, not rewriting the app.
