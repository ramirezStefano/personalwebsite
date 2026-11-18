import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const siteUrl = "https://ramirezstefano.com";

const pageNames = {
  "/": "Home",
  "/education": "Education",
  "/experience": "Experience",
  "/portfolio": "Portfolio",
  "/skills": "Skills",
};

const escapeHtml = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const replaceTag = (html, regex, replacement) => {
  if (!regex.test(html)) {
    throw new Error(`Prerender template mismatch: pattern not found — ${regex}`);
  }
  return html.replace(regex, replacement);
};

async function main() {
  const ssrEntryPath = path.join(root, "dist-ssr", "entry-server.js");
  const { render } = await import(pathToFileURL(ssrEntryPath).href);

  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

  for (const routePath of Object.keys(pageNames)) {
    const { html, meta } = render(routePath);
    const canonical = routePath === "/" ? `${siteUrl}/` : `${siteUrl}${routePath}`;
    const title = escapeHtml(meta.title);
    const description = escapeHtml(meta.description);

    const breadcrumbItems = [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }];
    if (routePath !== "/") {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: 2,
        name: pageNames[routePath],
        item: canonical,
      });
    }
    const breadcrumbJsonLd = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    });

    let pageHtml = template;
    pageHtml = replaceTag(pageHtml, /<div id="root"><\/div>/, `<div id="root">${html}</div>`);
    pageHtml = replaceTag(pageHtml, /<title>.*?<\/title>/, `<title>${title}</title>`);
    pageHtml = replaceTag(
      pageHtml,
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${description}" />`,
    );
    pageHtml = replaceTag(
      pageHtml,
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${canonical}" />`,
    );
    pageHtml = replaceTag(
      pageHtml,
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${title}" />`,
    );
    pageHtml = replaceTag(
      pageHtml,
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${canonical}" />`,
    );
    pageHtml = replaceTag(
      pageHtml,
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${description}" />`,
    );
    pageHtml = replaceTag(
      pageHtml,
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${title}" />`,
    );
    pageHtml = replaceTag(
      pageHtml,
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${description}" />`,
    );
    pageHtml = replaceTag(
      pageHtml,
      /<!--SSR_HEAD-->/,
      `<script type="application/ld+json">${breadcrumbJsonLd}</script>`,
    );

    const outDir = routePath === "/" ? distDir : path.join(distDir, routePath.slice(1));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), pageHtml);
    console.log(`Prerendered ${routePath} -> ${path.relative(root, path.join(outDir, "index.html"))}`);
  }

  fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
