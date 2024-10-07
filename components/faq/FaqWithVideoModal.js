import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Accordion from "../Accordion/Accordion";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
export const faqsData = [
  {
    id: 1,
    question: "What can I do with Gyanoda?",
    answer:
      "You can access previous years' questions and video solutions for competitive exams. We offer mock tests, doubt clearing sessions, and specialized content for exams like WBJEE.",
  },
  {
    id: 2,
    question: "When do I have access to use Gyanoda?",
    answer:
      "When you purchase the course, you will get full access to Gyanoda. Otherwise, on the course page you will see some lessons that provide demo videos.",
  },
  {
    id: 3,
    question: "How current is the exam preparation material?",
    answer:
      "The exam preparation material is based on WBJEE (West Bengal Joint Entrance Examination) previous years' questions from 2014-2024. It includes solutions, text explanations, videos, and other resources covering these past year questions.",
  },
];
export default function FaqWithVideoModal() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="faq-video-block section-padding section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 pe-xl-5 col-12">
            <div
              className="faq-video-wrapper me-xl-4 d-flex justify-content-center align-items-center bg-cover bg-center"
              style={{ backgroundImage: "url(img/faq-video-bg1.jpg)" }}
            >
              <div className="video-play-btn" onClick={() => setOpen(true)}>
                <BsFillPlayFill />
              </div>
              <div className="arrow-icon">
                <img src="img/icons/video-arrow.svg" alt="" />
              </div>

              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="C9wYPH49E3o"
                onClose={() => setOpen(false)}
              />
            </div>
          </div>
          <div className="col-xl-6 ps-xl-5 col-12 mt-xl-0 mt-5">
            <div className="block-contents ms-xl-4">
              <div
                className="section-title wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".2s"
              >
                <h2>If you want to know anything, ask us</h2>
              </div>
            </div>
            <div className="faq-accordion ms-xl-4 me-xl-4">
              <div className="accordion" id="mainaccordion">
                <Accordion content={faqsData} />
              </div>
            </div>
            <div
              className="faq-bottom ms-xl-4 mt-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".9s"
            >
              <span>Still have questions?</span>
              <Link href="/contact">
                <a>Get in touch</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
