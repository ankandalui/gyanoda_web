import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-widgets-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="single-footer-widget wow fadeInLeft">
                <div className="about-us-widget">
                  <Link href="/">
                    <a className="footer-logo d-block">
                      <img src="img/bloom.svg" alt="gyanoda" />
                    </a>
                  </Link>
                  <p>
                    <strong>Gyanoda</strong> is a creation of{" "}
                    <strong>Study Bloom 24</strong>. It empowers students in
                    WBJEE preparation with in-depth video lessons, practice sets
                    from past exams, personalized mock tests, and real-time
                    doubt resolution.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
              <div
                className="single-footer-widget wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <div className="widget-title">
                  <h5>Company</h5>
                </div>
                <ul>
                  <li>
                    <Link href="/about">
                      <a>About Gyanoda</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact & support</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms">
                      <a>Terms of Services</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
              <div
                className="single-footer-widget wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="widget-title">
                  <h5>Services</h5>
                </div>
                <ul>
                  <li>
                    <Link href="/services">
                      <a>Previous year question</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Video Solutions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Mock tests</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Doubt classes</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
              <div
                className="single-footer-widget wow fadeInLeft"
                data-wow-delay=".6s"
              >
                <div className="widget-title">
                  <h5>Resources</h5>
                </div>
                <ul>
                  <li>
                    <Link href="#">
                      <a>WBJEE prepration</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Study guides</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Premium support</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#">
                      <a>Our products</a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrapper">
        <div className="container">
          <div className="footer-bottom-content d-md-flex justify-content-between">
            <div
              className="site-copyright wow fadeInUp"
              data-wow-delay=".2"
              data-wow-duration="1s"
            >
              <p>
                &copy; 2024{" "}
                <Link href="/">
                  <a>
                    <strong>Study Bloom 24</strong>
                  </a>
                </Link>{" "}
                All Rights Reserved.
              </p>
            </div>
            <div
              className="social-links mt-4 mt-md-0 wow fadeInUp"
              data-wow-delay=".3"
              data-wow-duration="1s"
            >
              <Link href="#">
                <a>
                  <FaFacebookF />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <FaTwitter />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <FaInstagram />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <FaLinkedinIn />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
