import type { SiteConfig } from "@site/src/site-config-types";

const siteConfig: SiteConfig = {
  company: {
    name: "Acme",
  },
  site: {
    url: "https://docs.acme.com",
    baseUrl: "/docs",
  },
  navbar: {
    title: "Acme Docs",
    // logo: {
    //   src: "img/acme-logo.png",
    //   alt: "Acme logo",
    // },
    items: [
      // {
      //   label: "Home",
      //   position: "left",
      //   href: "https://acme.com",
      // },
    ],
  },
  footer: {
    style: "dark",
    // links: [
    //   {
    //     title: "Docs",
    //     items: [
    //       {
    //         label: "Tutorial",
    //         to: "/docs/intro",
    //       },
    //       {
    //         label: "Home",
    //         href: "https://acme.com",
    //       },
    //     ],
    //   },
    // ],
    copyright: `Copyright © ${new Date().getFullYear()} Acme Inc`,
  },
  colorMode: {
    defaultMode: "light",
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  docusaurusConfig: {},
};

export default siteConfig;
