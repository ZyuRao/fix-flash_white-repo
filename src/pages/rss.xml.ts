import type { APIRoute } from "astro";
import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { site as siteConfig } from "../config/site";

const blogPostPages = import.meta.glob("./blog/*.{md,mdx}");

export const GET: APIRoute = async ({ site }) => {
  return rss({
    title: `${siteConfig.name} Blog`,
    description: siteConfig.profile.bio,
    site: site ?? siteConfig.url,
    items: await pagesGlobToRssItems(blogPostPages),
    customData: "<language>zh-cn</language>",
  });
};
