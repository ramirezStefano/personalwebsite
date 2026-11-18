import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteMeta, siteUrl } from "../../routesMeta";

const setMetaTag = (attr: "name" | "property", key: string, content: string) => {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setLinkTag = (rel: string, href: string) => {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

export const useDocumentMeta = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(location.pathname);
    const canonicalUrl =
      location.pathname === "/" ? `${siteUrl}/` : `${siteUrl}${location.pathname}`;

    document.title = meta.title;
    setMetaTag("name", "description", meta.description);
    setMetaTag("property", "og:title", meta.title);
    setMetaTag("property", "og:description", meta.description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("name", "twitter:title", meta.title);
    setMetaTag("name", "twitter:description", meta.description);
    setLinkTag("canonical", canonicalUrl);
  }, [location.pathname]);
};
