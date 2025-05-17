import Head from "next/head";
import BlogContent from "../components/DefaultHome/BlogContent";
import CallToAction from "../components/DefaultHome/CallToAction";
import ContentBlockOne from "../components/DefaultHome/ContentBlockOne";
import ContentBlockTwo from "../components/DefaultHome/ContentBlockTwo";
import Hero from "../components/Hero/Hero";
import PopularCryptoCurrencies from "../components/DefaultHome/PopularCryptoCurrencies";
import FaqWithVideoModal from "../components/faq/FaqWithVideoModal";
import FeaturesOne from "../components/Features/FeaturesOne";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Unlock WBJEE Exam Success: Gyanoda Offers 10 Years of Solved Papers
          Across Multiple Subjects
        </title>
        <meta
          name="description"
          content="Achieve exam success with Gyanoda: 10 years of solved papers, video solutions, mock tests, and doubt sessions for exams like WBJEE."
        />
        <link rel="canonical" href="https://www.gyanoda.com/" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <Hero />
      <FeaturesOne />
      <ContentBlockOne />
      {/* <PopularCryptoCurrencies /> */}
      <ContentBlockTwo />
      {/* <Testimonial /> */}
      <FaqWithVideoModal />
      {/* <BlogContent /> */}
      <CallToAction />
    </>
  );
}
