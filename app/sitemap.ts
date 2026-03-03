import { MetadataRoute } from "next";

const siteUrl = "https://iamkamlesh18.github.io/freelanceportfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      priority: 1,
    },
    {
      url: `${siteUrl}/about/`,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/`,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/portfolio/`,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/`,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact/`,
      priority: 0.8,
    },
  ];
}