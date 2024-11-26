// src/components/RSSFeed/RSSFeed.tsx
import React, { useState, useEffect } from "react";
import { fetchRSSFeed } from "../../services/rssService";

interface RSSItem {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
}

const RSSFeed: React.FC = () => {
  const [feed, setFeed] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getFeed = async () => {
      const rssFeed = await fetchRSSFeed();
      setFeed(rssFeed);
      setLoading(false);
    };

    getFeed();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>RSS Feed</h2>
      <ul>
        {feed.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <p>{item.contentSnippet}</p>
            <small>{new Date(item.isoDate).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { RSSFeed };
