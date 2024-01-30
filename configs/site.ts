import { FooterItem } from "@/types";

const links = {
  githubAccount: "https://github.com/ibrahimraimi",
  discord: "https://discord.com/users/ibrahimraimi",
};

export const siteConfig = {
  name: "Craftform",
  description:
    "Craftform – the innovative form builder that redefines your business. Bid adieu to dull forms and welcome a dynamic approach to glean valuable insights.",
  url: "https://craftform.ibrahimraimi.com",
  ogImage: "https://craftform.ibrahimraimi.com/opengraph-image.png",
  links: {
    twitter: "https://twitter.com/ibrahimraimi_",
    github: "https://github.com/ibrahimraimi/craftform",
  },
};

export type SiteConfig = typeof siteConfig;

export const footerConfig = {
  footerNav: [
    {
      title: "Resources",
      items: [
        {
          title: "Blog",
          href: "",
          external: true,
        },
        {
          title: "Why Craftform",
          href: "",
          external: true,
        },
        {
          title: "Community",
          href: "",
          external: true,
        },
        {
          title: "FAQ",
          href: "",
          external: true,
        },
        {
          title: "Tutorials",
          href: "",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/pages/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/pages/Contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/pages/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/pages/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Twitter",
          href: "https://twitter.com/ibrahimraimi_",
          external: true,
        },
        {
          title: "Facebook",
          href: "",
          external: true,
        },
        {
          title: "GitHub",
          href: "https://github.com/ibrahimraimi/craftform",
          external: true,
        },
        {
          title: "Instagram",
          href: "",
          external: true,
        },
        {
          title: "YouTube",
          href: "",
          external: true,
        },
      ],
    },
    {
      title: "Product",
      items: [
        {
          title: "Pricing",
          href: "",
          external: true,
        },
        {
          title: "Enterprise",
          href: "",
          external: true,
        },
        {
          title: "Lead Genearation",
          href: "",
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};
