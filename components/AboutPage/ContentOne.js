import dynamic from "next/dynamic";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function ContentOne() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="promo-content-block fix section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="video-cta">
              <img src="/img/home2/video-banner1.jpg" alt="" />
              <div className="video-play-btn" onClick={() => setOpen(true)}>
                <BsFillPlayFill />
              </div>

              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="CfALVANadiw"
                onClose={() => setOpen(false)}
              />
            </div>
          </div>
          <div className="col-xl-6 col-12 ps-xl-5 mt-5 mt-xl-0 ">
            <div className="block-contents ms-xl-5">
              <div className="section-title mb-4">
                <h2 className="wow fadeInUp">
                  The story behind how our company was founded
                </h2>
                <p className="wow fadeInUp pt-15" data-wow-delay=".3s">
                  Gyanoda is the go-to platform for students preparing for the
                  West Bengal Joint Entrance Examination (WBJEE).
                </p>
                <p className="mt-3">
                  Offering a comprehensive suite of resources—including in-depth
                  syllabus coverage, mock tests, previous year papers, and
                  personalized study plans—Gyanoda helps you master Physics,
                  Chemistry, and Mathematics with ease. With expert guidance,
                  real-time doubt solving, and interactive video lessons,
                  Gyanoda ensures that your WBJEE preparation is both effective
                  and engaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
