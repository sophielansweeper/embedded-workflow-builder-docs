import type { SiteConfig } from "@site/src/site-config-types";

const siteConfig: SiteConfig = {
  docsSite: {
    url: "https://docs.acme.com",
    baseUrl: "/docs",
  },
  phrases: {
    "%COMPANY%": "Acme Inc",
    "%COMPANY_POSESSIVE%": "Acme Inc's",
    "%COMPANY_CORE_PRODUCT%": "Widget ERP",
    "%EMBEDDED_WORKFLOW_BUILDER%": "Workflow Builder",
    "%WORKFLOW%": "workflow",
    "%WORKFLOW_PLURAL%": "workflows",
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
