export interface FriendLinkItem {
  name: string;
  description: string;
  href: string;
  avatarSrc: string;
}

export const friendLinks = [
  {
    name: "Astro",
    description: "Fast, content-focused websites built with Astro.",
    href: "https://astro.build/",
    avatarSrc: "/avatar.svg",
  },
  {
    name: "Vite",
    description: "Next generation frontend tooling with instant dev feedback.",
    href: "https://vite.dev/",
    avatarSrc: "/site-icon.svg",
  },
  {
    name: "MDN Web Docs",
    description: "Authoritative web platform documentation for HTML, CSS, and JavaScript.",
    href: "https://developer.mozilla.org/",
    avatarSrc: "/avatar.svg",
  },
  {
    name: "TypeScript",
    description: "JavaScript with syntax for types, built for scalable applications.",
    href: "https://www.typescriptlang.org/",
    avatarSrc: "/site-icon.svg",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom interfaces.",
    href: "https://tailwindcss.com/",
    avatarSrc: "/avatar.svg",
  },
  {
    name: "GitHub",
    description: "Collaborative platform for version control, code hosting, and open source projects.",
    href: "https://github.com/",
    avatarSrc: "/site-icon.svg",
  },
] satisfies readonly FriendLinkItem[];
