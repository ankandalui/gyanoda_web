export default function ContentBlockOne() {
  return (
    <section className="content-block section-padding section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 pe-lg-0 col-lg-5 col-12">
            <div className="block-img wow fadeInLeft" data-wow-duration="1.1s">
              <img src="img/home1/block-img.png" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 offset-xl-1 col-12 ps-lg-5 pe-xl-5">
            <div className="block-contents ms-xl-3 mt-5 mt-lg-0">
              <div
                className="section-title wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".2s"
              >
                <h2>Master competitive exams with Gyanoda</h2>
              </div>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".4s"
              >
                The most comprehensive exam prep app of today. Easily access
                previous year questions, video solutions, and instant doubt
                clearing
              </p>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".4s"
              >
                As thousands of successful students can attest, preparing with
                Gyanoda gives you a significant advantage. Start your journey to
                exam success with our curated content and expert guidance.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.gyanodapyq.studybloom24"
                className="theme-btn mt-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".6s"
              >
                Download Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
