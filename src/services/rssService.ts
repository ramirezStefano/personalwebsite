// src/services/rssService.ts
import axios from "axios";

const CORS_PROXY = "https://api.allorigins.win/get?url=";
const RSS_URL = "https://css-tricks.com/feed/";

interface RSSItem {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
}

const parseRSS = (rssText: string): RSSItem[] => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(rssText, "application/xml");
  const items = xmlDoc.querySelectorAll("item");

  return Array.from(items).map((item) => ({
    title: item.querySelector("title")?.textContent || "",
    link: item.querySelector("link")?.textContent || "",
    contentSnippet: item.querySelector("description")?.textContent || "",
    isoDate: item.querySelector("pubDate")?.textContent || "",
  }));
};

export const fetchRSSFeed = async (): Promise<RSSItem[]> => {
  try {
    const response = await axios.get(CORS_PROXY + encodeURIComponent(RSS_URL));
    const data = response.data.contents; // All Origins returns the data under 'contents'
    return parseRSS(data);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return [];
  }
};
