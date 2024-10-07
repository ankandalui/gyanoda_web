import Accordion from "../Accordion/Accordion";

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

export default function FaqContent() {
  return (
    <section className="faq-ask-wrapper section-padding">
      <div className="container">
        <div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
          <div className="block-contents fw500">
            <div className="section-title wow fadeInUp" data-wow-duration="1s">
              <h2>If you want to know anything, ask us</h2>
            </div>
          </div>
        </div>

        <div className="row faq-ask">
          <div className="col-lg-6 col-12">
            <div className="faq-accordion">
              <Accordion content={faqsData} />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="faq-accordion">
              <Accordion content={faqsData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
