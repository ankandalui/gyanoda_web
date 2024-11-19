import React from "react";

export default function CallToAction() {
  return (
    <section className="cta-banner-wrapper style-1 section-padding pt-0">
      <div className="container">
        <div className="cta-banner text-white">
          <div className="row">
            <div className="col-xxl-6 text-center text-xxl-start offset-xxl-1">
              <div className="cta-contents">
                <h2 className="wow fadeInUp">
                  Download & explore the our learning app
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  The most comprehensive WBJEE prep app available today. Easily
                  access expert-curated study materials, video solutions, and
                  practice tests to boost your exam performance.
                </p>
                {/* <a
                  href="#"
                  className="app-download-btn wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <img src="/img/apple.png" alt="" />
                </a> */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.gyanodapyq.studybloom24"
                  className="app-download-btn wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <img src="/img/android.png" alt="" />
                </a>
                <div
                  className="tri-arrow wow fadeInRight d-none d-md-inline-block"
                  data-wow-delay="1s"
                  style={{ transform: "scale(0.8) translateX(-50px)" }}
                >
                  <img src="/img/icons/tir-shape.svg" alt="Tri-shape" />
                </div>
              </div>
            </div>
            <div className="col-xxl-5 pe-xxl-5">
              <div
                className="cta-mobile-app wow fadeInUp"
                data-wow-delay=".4s"
                data-wow-duration="1.2"
              >
                <img src="img/cta-right-img2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
