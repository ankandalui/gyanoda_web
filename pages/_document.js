import { Head, Html, Main, NextScript } from "next/document";
const GTM_ID = 'GTM-5P6K7GDM'; 
export default function Document() {
	return (
		
		<Html>
			<Head>
			<script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
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
			</Head>
			<body>
			<noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
