// import Head from "next/head";
// import "react-image-lightbox/style.css";
// import "react-modal-video/css/modal-video.min.css";
// import "slick-carousel/slick/slick.css";
// import Layout from "../components/Layout/Layout";
// import "../styles/animate.css";
// import "../styles/bootstrap.min.css";
// import "../styles/icons.css";
// import "../styles/scss/style.scss";
// import './../styles/cookie.css';
// import EnhancedCookieConsent from "./cookie-constant";

// function MyApp({ Component, pageProps }) {
// 	return (
// 		<>
// 			<Head>
				
// 				<link rel="icon" href="/img/favicon.png" />
// 			</Head>
// 			<Layout>
// 				<Component {...pageProps} />
// 				<EnhancedCookieConsent/>
// 			</Layout>
// 		</>
// 	);
// }

// export default MyApp;
import Head from "next/head";
import SimpleReactLightbox from "simple-react-lightbox";
import "react-modal-video/css/modal-video.min.css";
import "slick-carousel/slick/slick.css";
import Layout from "../components/Layout/Layout";
import "../styles/animate.css";
import "../styles/bootstrap.min.css";
import "../styles/icons.css";
import "../styles/scss/style.scss";
import '../styles/cookie.css';
import EnhancedCookieConsent from "./cookie-constant";


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/img/favicon.png" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;