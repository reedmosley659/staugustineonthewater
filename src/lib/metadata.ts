import type { Metadata } from "next";
import { getSiteUrl, siteDescription, siteName, siteTitle } from "./site";

function getGoogleSiteVerification(): string | undefined {
  const value = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  return value || undefined;
}

function buildSharedMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonicalUrl = new URL(path, getSiteUrl()).toString();

  return {
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName,
      title,
      description,
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function createRootMetadata(): Metadata {
  const verification = getGoogleSiteVerification();

  return {
    metadataBase: getSiteUrl(),
    title: {
      default: siteTitle,
      template: `%s | ${siteName}`,
    },
    ...buildSharedMetadata({
      title: siteTitle,
      description: siteDescription,
      path: "/",
    }),
    ...(verification && {
      verification: {
        google: verification,
      },
    }),
  };
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    ...buildSharedMetadata({
      title: fullTitle,
      description,
      path,
    }),
  };
}
