import React from "react";

export default function Hero() {
  return (
    <section className="hero-welcome-wrapper hero-1">
      <div className="single-slide text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
              <div className="hero-contents">
                <h1>Achieve Exam Success with Expert Guidance from Gyanoda</h1>
                <p>
                  Get 10 Years of Solved Question Papers Across Multiple
                  Subjects for Comprehensive Exam Preparation.
                </p>
                {/* <a href="#" className="app-download-btn">
                  <img src="img/apple.png" alt="" />
                </a> */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.gyanodapyq.studybloom24"
                  className="app-download-btn"
                >
                  <img
                    src="img/android.png"
                    alt="Download Gyanoda Android App"
                  />
                </a>
                <div className="tri-arrow">
                  <img
                    src="img/icons/tir-shape.svg"
                    alt="Decorative arrow shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0">
              <div className="hero-mobile mt-5 mt-xl-0">
                <img
                  src="img/mobile-hero2.png"
                  alt="Gyanoda mobile app interface showing WBJEE exam preparation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
