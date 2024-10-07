export default function ContentTwo() {
  return (
    <section className="promo-content-block fix section-padding section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-12 mt-5 mt-xl-0 order-2 order-xl-1">
            <div className="block-contents">
              <div className="section-title mb-4">
                <h2 className="wow fadeInUp">
                  Our goal is to expand the digital learning platform
                </h2>
                <p className="wow fadeInUp pt-15" data-wow-delay=".3s">
                  Gyanoda's mission is to revolutionize WBJEE preparation by
                  making it accessible and effective for all students across
                  West Bengal. We aim to empower aspiring engineers through our
                  comprehensive digital platform, offering in-depth syllabus
                  coverage, explained previous year papers, and personalized
                  study plans. With expert guidance, real-time doubt solving,
                  and interactive video lessons, we've already helped 250+
                  students achieve a 99% satisfaction rate. Gyanoda isn't just
                  an app; it's an ecosystem that eliminates the need for
                  expensive materials, ensuring quality education is just a
                  click away for every WBJEE aspirant.
                </p>
              </div>
            </div>
            <div className="funfacts d-flex">
              <div className="single-funfact wow fadeInUp" data-wow-delay=".5s">
                <h3>
                  <span>250</span>+
                </h3>
                <p>Happy Students</p>
              </div>
              <div className="single-funfact wow fadeInUp" data-wow-delay=".8s">
                <h3>
                  <span>99</span>%
                </h3>
                <p>Customer satisfaction</p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 order-1 order-xl-2">
            <img src="img/about-img2.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
