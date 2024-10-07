import React, { useState } from "react";

export default function CallToAction() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your server or API
    console.log("Submitting email:", email);
    // You can add your API call or other logic here
    alert(`Thank you for your interest! We'll contact you at: ${email}`);
    setEmail(""); // Clear the input after submission
  };

  return (
    <section className="cta-banner-wrapper section-padding pt-0">
      <div className="container">
        <div className="cta-banner newsletter-box text-white">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center col-xl-8 offset-xl-2">
              <div className="cta-contents">
                <h2 className="wow fadeInUp">
                  Are you ready to ace your WBJEE with Gyanoda?
                </h2>
                <div className="newsletter-form wow fadeInUp">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="submit-btn">
                      Contact Now
                    </button>
                  </form>
                </div>

                <div className="arrow-shape">
                  <img src="/img/arrow-shape.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
