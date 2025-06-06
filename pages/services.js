import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
import FaqWithVideoModal from "../components/faq/FaqWithVideoModal";
import PricingContent from "../components/Pricing/PricingContent";
import Services from "../components/Services/Services";

export default function services() {
  return (
    <>
      <Head>
      <title>Gyanoda™ | Our Services</title>
      </Head>
      <PageBanner
        title="Our Services"
        content="We work to create some of the most attractive and meaningful places for small businesses."
      />
      <Services />
      {/* <PricingContent /> */}
      <FaqWithVideoModal />
    </>
  );
}
