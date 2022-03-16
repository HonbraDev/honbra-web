import Head from "next/head";
import socials from "../data/socials";

import {
  Container,
  Typography,
  Breadcrumbs,
  Tooltip,
  Box,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import { Link } from "./Link";

import type { BoxProps } from "@mui/material";
import type PageMeta from "../types/PageMeta";

export const Footer = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6, gap: 4 }}>
      {socials.map(({ icon: Icon, href, tooltip }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
        >
          <Tooltip title={tooltip || ""} placement="top">
            <IconButton size="large">
              <Icon />
            </IconButton>
          </Tooltip>
        </Link>
      ))}
    </Box>
  );
};

export const RouteBreadcrumb = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => (
  <Link
    href={link}
    underline="hover"
    color="inherit"
    sx={{ cursor: "pointer" }}
  >
    {title}
  </Link>
);

export const Layout = ({
  meta,
  children,
  disableFlex,
  wider,
}: {
  meta: PageMeta;
  children: any;
  disableFlex?: boolean;
  wider?: boolean;
}) => {
  const router = useRouter();
  const ogImage = getOgImage(meta.title, meta.markdownTitle, meta.ogImage);
  const canonicalUrl = `https://honbra.com/${router.asPath}`;
  const pageTitle =
    meta.title === "Honbra" ? meta.title : meta.title + " - Honbra";
  return (
    <>
      <Head>
        {/* Title & name */}
        <title>{pageTitle}</title>
        <meta property="og:title" content={meta.title} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="og:site_name" content="Honbra" />

        {/* Description */}
        {meta.description && (
          <>
            <meta name="description" content={meta.description} />
            <meta property="og:description" content={meta.description} />
            <meta property="twitter:description" content={meta.description} />
          </>
        )}

        {/* URL */}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:domain" content="honbra.com" />

        {/* Image */}
        <meta property="og:image" content={ogImage} />
        <meta property="twitter:image" content={ogImage} />
        <meta property="twitter:card" content="summary_large_image" />

        {/* Yup, it's a website */}
        <meta property="og:type" content="website" />

        {/* Color~s~ in Discord! */}
        <meta name="theme-color" content="#1E90FF" />
      </Head>
      <Container
        sx={{
          my: 8,
          ...(disableFlex
            ? {}
            : {
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }),
        }}
        maxWidth={wider ? undefined : "md"}
      >
        <Box>
          {router.route !== "/" && (
            <Breadcrumbs>
              <RouteBreadcrumb title="Honbra" link="/" />
              <Box />
            </Breadcrumbs>
          )}
          <Typography variant="h3" component="h1">
            {meta.title}
          </Typography>
        </Box>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export const Section = ({
  title,
  disableFlex,
  children,
  sx,
}: {
  title?: string;
  disableFlex?: boolean;
  children: any;
  sx?: BoxProps["sx"];
}) => (
  <Box
    sx={{
      ...(disableFlex
        ? {}
        : {
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }),
      ...sx,
    }}
  >
    {title && <Typography variant="h4">{title}</Typography>}
    {children}
  </Box>
);

export const getOgImage = (
  title: string,
  markdownTitle?: string,
  ogImage?: string,
) =>
  `https://og-image.honbra.com/${encodeURIComponent(
    markdownTitle ? markdownTitle : `**${title}**`,
  )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fhonbra.com%2Fimg%2Flogo_light.png${
    ogImage ? `&images=${encodeURIComponent(ogImage)}` : ""
  }`;
