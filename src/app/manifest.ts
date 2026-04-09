import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zenn Studios",
    short_name: "Zenn",
    description:
      "Architects of the Unforgettable. A boutique agency at the intersection of high-performance software and cinematic media.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#000000",
    theme_color: "#b6332e",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-wide.png",
        sizes: "1280x720",
        form_factor: "wide",
        type: "image/png",
        label: "Zenn Studios — Architects of the Unforgettable",
      },
    ],
    shortcuts: [
      {
        name: "Start a Project",
        short_name: "Enquiry",
        description: "Kick off your next project with Zenn Studios",
        url: "/enquiry",
        icons: [{ src: "/favicon.ico", sizes: "any" }],
      },
      {
        name: "Our Work",
        short_name: "Work",
        description: "Browse the Zenn Studios portfolio",
        url: "/work",
        icons: [{ src: "/favicon.ico", sizes: "any" }],
      },
    ],
  };
}
