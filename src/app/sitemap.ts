import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // 기본 페이지 목록
  const basePages = [
    {
      url: "https://demodev.io",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    // {
    //   url: "https://demodev.io/challenge",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly" as const,
    //   priority: 0.8,
    // },
    // {
    //   url: "https://demodev.io/workshop",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly" as const,
    //   priority: 0.8,
    // },
  ];

  return [...basePages];
}
