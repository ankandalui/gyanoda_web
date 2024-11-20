import { Head, Html, Main, NextScript } from "next/document";
const GTM_ID = 'GTM-5P6K7GDM';
const GA_ID = 'G-VMHLXBPR06';
export default function Document() {
	return (

		<Html>
			<Head>

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
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1852241678410881"
					crossOrigin="anonymous"
				/>
				<meta
					name="google-adsense-account"
					content="ca-pub-1852241678410881"
				/>

				{/* Google Tag Manager */}
				{/* <script
					dangerouslySetInnerHTML={{
						__html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
					}}
				/> */}
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
