import { Head, Html, Main, NextScript } from "next/document";
const GTM_ID = "GTM-5P6K7GDM";
const GA_ID = "G-VMHLXBPR06";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Responsive viewport meta tag */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        {/* LocalBusiness Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "gyanoda",
  "image": "https://www.gyanoda.com/img/mobile-hero2.png",
  "@id": "https://www.gyanoda.com/img/mobile-hero2.png",
  "url": "https://www.gyanoda.com/",
  "telephone": "9073963347",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "218, Basudevpur Road Saratpally Shyamnagar",
    "addressLocality": "Kolkata",
    "postalCode": "743127",
    "addressCountry": "IN"
  }
}
            `,
          }}
        />

        {/* Educational Course Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "WBJEE Exam Preparation Course",
  "description": "Comprehensive WBJEE exam preparation with 10 years of solved papers, video solutions, mock tests, and doubt clearing sessions.",
  "provider": {
    "@type": "Organization",
    "name": "Gyanoda",
    "sameAs": "https://www.gyanoda.com/"
  },
  "offers": {
    "@type": "Offer",
    "category": "Competitive Exam Preparation",
    "availability": "https://schema.org/InStock"
  }
}
            `,
          }}
        />

        {/* FAQ Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What can I do with Gyanoda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can access previous years' questions and video solutions for competitive exams. We offer mock tests, doubt clearing sessions, and specialized content for exams like WBJEE."
      }
    },
    {
      "@type": "Question",
      "name": "When do I have access to use Gyanoda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you purchase the course, you will get full access to Gyanoda. Otherwise, on the course page you will see some lessons that provide demo videos."
      }
    },
    {
      "@type": "Question",
      "name": "How current is the exam preparation material?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The exam preparation material is based on WBJEE (West Bengal Joint Entrance Examination) previous years' questions from 2014-2024. It includes solutions, text explanations, videos, and other resources covering these past year questions."
      }
    }
  ]
}
            `,
          }}
        />

        {/* WebApplication Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Gyanoda WBJEE Exam Preparation App",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "250"
  },
  "description": "Comprehensive WBJEE exam preparation app with 10 years of solved papers, video solutions, mock tests, and doubt clearing sessions.",
  "downloadUrl": "https://play.google.com/store/apps/details?id=com.gyanodapyq.studybloom24"
}
            `,
          }}
        />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11507505504"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11507505504');
            `,
          }}
        />

        {/* Event snippet for Purchase conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': 'AW-11507505504/QQE2CLL4gvoZEOCymu8q',
                'transaction_id': ''
              });
            `,
          }}
        />

        {/* Usercentrics Consent Management Platform */}
        <script
          id="usercentrics-cmp"
          src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
          data-settings-id="njLuVAxlVYQd4y"
          async
        />

        {/* Google Tag Manager - Load after consent */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize dataLayer
              window.dataLayer = window.dataLayer || [];

              // Wait for Usercentrics to be ready
              window.addEventListener('ucEvent', function(e) {
                if (e.detail.event === 'consent_status') {
                  const services = e.detail.data;

                  // Check if marketing consent is given
                  if (services.marketing === true) {
                    // Initialize GTM
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${GTM_ID}');

                    // Initialize Google Analytics
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', {
                      'consent': 'granted'
                    });
                  }
                }
              });
            `,
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7117601803338811"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-7117601803338811" />

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />

        {/* Font preloading for better performance */}
        <link
          rel="preload"
          href="/fonts/GeneralSans-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeneralSans-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeneralSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link href="/fonts/GeneralSans-Bold.eot" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Bold.woff" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Bold.woff2" rel="stylesheet" />

        <link href="/fonts/GeneralSans-Medium.eot" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Medium.woff" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Medium.woff2" rel="stylesheet" />

        <link href="/fonts/GeneralSans-Regular.eot" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Regular.woff" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Regular.woff2" rel="stylesheet" />

        <link href="/fonts/GeneralSans-Semibold.eot" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Semibold.woff" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Semibold.woff2" rel="stylesheet" />

        <link href="/fonts/xmoze.eot" rel="stylesheet" />
        <link href="/fonts/xmoze.woff" rel="stylesheet" />
        <link href="/fonts/xmoze.woff2" rel="stylesheet" />

        <meta
          name="google-adsense-account"
          content="ca-pub-1852241678410881"
        ></meta>
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
