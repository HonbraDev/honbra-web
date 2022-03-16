export default interface PageMeta {
  /** The page title */
  title: string;

  /** The route where the page will live */
  route: string;

  /** The page title in Markdown (for og-image) */
  markdownTitle?: string;

  /** A quick description of the page */
  description?: string;

  /** A custom og-image url */
  ogImage?: string;
}
