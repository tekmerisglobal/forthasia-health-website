import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// This site is fully static (no ISR/revalidation). /api/intake, sitemap and
// robots are the only dynamic routes; everything else is prerendered HTML.
//
// - incrementalCache: reads prerendered pages from the Cloudflare ASSETS
//   binding instead of a KV/R2 round-trip.
// - enableCacheInterception: serve a cached/prerendered route directly from
//   the cache layer WITHOUT booting the full Next server runtime in the
//   Worker. Safe here because there is no PPR. This is the main lever for
//   fast static-page responses on Workers.
//
// Pages ship with `Cache-Control: s-maxage=31536000`, so once the site is on
// a Cloudflare zone (forthasiahealth.com) the edge cache serves the HTML and
// the Worker is not invoked at all for the common case.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
