import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
    default: "Verve - Lightweight & blazingly fast launcher",
    template: `%s | Verve`,
  },
  description:
    "Verve is a lightweight and blazingly fast launcher for accessing and opening applications, files and documents.",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "Verve - Lightweight & blazingly fast launcher",
    description:
      "Verve is a lightweight and blazingly fast launcher for accessing and opening applications, files and documents.",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dxkshdev",
    title: "Verve - Lightweight & blazingly fast launcher",
    description:
      "Verve is a lightweight and blazingly fast launcher for accessing and opening applications, files and documents.",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  metadataBase: new URL("https://verve.vercel.app"),
};
