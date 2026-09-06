import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// This site is fully static (no ISR/revalidation) — serve prerendered pages
// straight from Cloudflare's static assets instead of re-rendering them in
// the Worker on every request. /api/intake is the one dynamic route and
// still runs in the Worker (nodejs_compat is on for it in wrangler.jsonc).
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
