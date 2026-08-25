import { MetadataRoute } from "next";
import { SAMPLE_BANKS } from "@/data/banks";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://depositlk.vercel.app";

	const staticRoutes = [
		"",
		"/browse",
		"/calculator",
		"/compare",
		"/quiz",
		"/about",
		"/faq",
		"/guides/fd",
		"/guides/rd",
		"/guides/savings",
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: route === "" ? 1.0 : 0.8,
	}));

	const bankRoutes = SAMPLE_BANKS.map((bank) => ({
		url: `${baseUrl}/browse/${bank.slug}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.7,
	}));

	return [...staticRoutes, ...bankRoutes];
}
