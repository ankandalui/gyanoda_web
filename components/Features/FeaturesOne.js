import { AiOutlineBarChart } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

export default function FeaturesOne() {
  return (
    <section className="our-best-features-wrapper section-padding">
      <div className="container">
        <div className="col-xl-8 offset-xl-2 text-center">
          <div className="block-contents">
            <div className="section-title">
              <h2>Start your learning journey with dose of fun!</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="features-card-item style-1">
              <div className="icon icon1">
                <IoVideocam />
              </div>
              <h3>PYQs & Video Solutions</h3>
              <p>
                Access comprehensive PYQs and HD video explanations for
                competitive exams
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="features-card-item style-1">
              <div className="icon icon2">
                <AiOutlineBarChart />
              </div>
              <h3>Learn anytime anywhere </h3>
              <p>
                Prepare for exams on-the-go with our comprehensive digital
                platform
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="features-card-item style-1">
              <div className="icon icon3">
                <FiSend />
              </div>
              <h3>Instant Doubt Clearing</h3>
              <p>
                Get expert explanations instantly to clear your doubts and boost
                understanding
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
