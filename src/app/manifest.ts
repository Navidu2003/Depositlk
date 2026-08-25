import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DepositLK - Bank Deposit Comparison",
    short_name: "DepositLK",
    description: "Independent Sri Lankan bank deposit comparison and financial literacy tool.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9F5",
    theme_color: "#1F4E5F",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}