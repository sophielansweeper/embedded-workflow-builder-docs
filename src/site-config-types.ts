/**
 * This defines types for a site-config file.
 * See README.md
 */

import type { Config as DocusaurusConfig } from "@docusaurus/types";
import type { ColorModeConfig, Footer, Navbar } from "@docusaurus/theme-common";

export interface SiteConfig {
  /** Information about your company to put into documentation */
  company: {
    /** Your company's name */
    name: string;
    /** Possessive version of your company's name. e.g. `Acme's` */
    possessive: string;
  };
  /** Information about your embedded workflow builder offering */
  workflowBuilder: {
    /** What you call your embedded workflow builder */
    name: string;
    /** What you call a single flow */
    flow: string;
  };
  /**
   * If docs will exist at https://docs.acme.com/path/to/docs, set
   * url to `https://docs.acme.com` and baseUrl to `/path/to/docs`
   */
  docsSite: {
    /** The base URL of your docs site. e.g. https://docs.acme.com */
    url: string;
    /** The path where your site is hosted. If your docs wille xist in https://docs.acme.com/path/to/docs, enter `/path/to/docs` */
    baseUrl: `/${string}`;
  };
  /** Docusaurus navbar items and title */
  navbar: Partial<Navbar>;

  /** Footer theme, items and copyright line */
  footer: Partial<Footer>;

  /** Support light mode, dark mode, or both */
  colorMode: ColorModeConfig;

  docusaurusConfig?: Partial<DocusaurusConfig>;
}
