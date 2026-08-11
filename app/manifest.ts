import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CollegeSure by Brainzima — College & Course Admissions Guidance",
    short_name: "CollegeSure",
    description:
      "Expert college admissions guidance for Medical, Paramedical, Engineering, BCA, BBA, B.Com and other graduation programs.",
    start_url: "/",
    display: "standalone",
    background_color: "#04164B",
    theme_color: "#04164B",
    orientation: "portrait",
    icons: [
      {
        src: "/faviconLogo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/faviconLogo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/faviconLogo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
