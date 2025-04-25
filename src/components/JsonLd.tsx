import React from "react";

interface WebsiteJsonLdProps {
  url: string;
  name: string;
  description: string;
}

interface OrganizationJsonLdProps {
  url: string;
  name: string;
  logo: string;
  description: string;
}

interface BreadcrumbJsonLdProps {
  items: {
    position: number;
    name: string;
    item: string;
  }[];
}

export function WebsiteJsonLd({
  url,
  name,
  description,
}: WebsiteJsonLdProps): React.ReactElement {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name,
    description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export function OrganizationJsonLd({
  url,
  name,
  logo,
  description,
}: OrganizationJsonLdProps): React.ReactElement {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url,
    name,
    logo,
    description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: BreadcrumbJsonLdProps): React.ReactElement {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
