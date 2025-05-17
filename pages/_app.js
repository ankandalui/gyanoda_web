import Head from "next/head";
import SimpleReactLightbox from "simple-react-lightbox";
import "react-modal-video/css/modal-video.min.css";
import "slick-carousel/slick/slick.css";
import Layout from "../components/Layout/Layout";
import "../styles/animate.css";
import "../styles/bootstrap.min.css";
import "../styles/icons.css";
import "../styles/scss/style.scss";
import "../styles/cookie.css";
import EnhancedCookieConsent from "./cookie-constant";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.png" />
        {/* Default title and meta tags (will be overridden by page-specific ones) */}
        <title>
          Unlock WBJEE Exam Success: Gyanoda Offers 10 Years of Solved Papers
          Across Multiple Subjects
        </title>
        <meta
          name="description"
          content="Achieve exam success with Gyanoda: 10 years of solved papers, video solutions, mock tests, and doubt sessions for exams like WBJEE."
        />
        <meta
          name="keywords"
          content="wbjee video solutions, wbjee past year questions, wbjee preparation, wbjee exam help, wbjee video tutorials, online wbjee study, wbjee success strategies"
        />
        <meta name="author" content="Gyanoda" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow" />
        <link rel="canonical" href="https://www.gyanoda.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Unlock WBJEE Exam Success: Gyanoda Offers 10 Years of Solved Papers Across Multiple Subjects"
        />
        <meta
          property="og:description"
          content="Achieve exam success with Gyanoda: 10 years of solved papers, video solutions, mock tests, and doubt sessions for exams like WBJEE."
        />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta property="og:url" content="https://www.gyanoda.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Unlock WBJEE Exam Success: Gyanoda Offers 10 Years of Solved Papers Across Multiple Subjects"
        />
        <meta
          name="twitter:description"
          content="Achieve exam success with Gyanoda: 10 years of solved papers, video solutions, mock tests, and doubt sessions for exams like WBJEE."
        />
        <meta name="twitter:image" content="/img/og-image.jpg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
