import Head from "next/head";
import CallToAction from "../components/Common/CallToAction";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "./../components/faq/FaqContent";

export default function faq() {
  return (
    <>
      <Head>
        <title>Gyanoda™ | FAQ - Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Gyanoda's WBJEE exam preparation resources, video solutions, and study materials."
        />
        <link rel="canonical" href="https://www.gyanoda.com/faq" />
        <meta name="googlebot" content="index,follow" />

        {/* Breadcrumb Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.gyanoda.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "FAQ",
      "item": "https://www.gyanoda.com/faq"
    }
  ]
}
            `,
          }}
        />
      </Head>
      <PageBanner
        title="Frequently Asked Questions"
        content="Find answers to common questions about Gyanoda's WBJEE exam preparation resources, video solutions, and study materials."
      />
      <FaqContent />
      <CallToAction />
    </>
  );
}
