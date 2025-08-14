import React from "react";

const TestimonialSection = () => {
  return (
    <section className="testimonials-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="testimonials-section-wrapper">
          <div className="section-wrapper">
            <div className="section-heading-wrapper center">
              <div className="heading-wrapper center">
                <div
                  data-w-id="9b2ee7b9-e3ee-41a4-1836-aef026a59ecd"
                  className="section-heading-tag"
                >
                  <div className="icon-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/6848195d8d2149316f36870d_cc2f060de8b0afdda64a35049a662fe2_Navbar%20Icon%2002.svg"
                      loading="lazy"
                      alt="Navbar Icon"
                    />
                  </div>
                  <div>Testimonials</div>
                </div>
                <h2
                  data-w-id="9b2ee7b9-e3ee-41a4-1836-aef026a59ed2"
                  className="section-heading-big"
                >
                  What Our Clients Say Speaks Volumes
                </h2>
                {/* <div className="writer-logo-01">
                  <img
                    src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/684aba8e38df52e4d3699b78_a5827422915d4b544cd5c6db38f9a728_Client%20Logo%2005-%20Black.svg"
                    loading="lazy"
                    alt="Client Logo "
                  />
                </div> */}
                {/* <div className="writer-logo-02">
                  <img
                    src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/684aba8e38df52e4d3699b7b_dbcf2291d4961c26102396ec3101cb94_Client%20Logo%2009-%20Black.svg"
                    loading="lazy"
                    alt="Client Logo"
                  />
                </div> */}
              </div>
            </div>

            {/* <a
              data-w-id="26535f8b-e5a2-291d-7f59-8658c88a9dc1"
              href="/testimonial"
              className="primary-button w-inline-block"
            >
              <div className="button-text">more reviews</div>
              <div className="button-arrow">
                <img
                  src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/68481d2acc3934f31f164c0c_arrow-right.svg"
                  loading="eager"
                  alt="Arrow Right"
                />
              </div>
              <div className="button-hover-block"></div>
            </a> */}
          </div>

          <div
            data-w-id="9b2ee7b9-e3ee-41a4-1836-aef026a59ed9"
            className="testimonials-block"
          >
            <div className="testimonials-card-wrapper _01">
              <div className="testimonials-card _01">
                <p className="testimonials-text">
                  “The team was very experienced. They made sure to always
                  provide a rationale for their choices.”
                </p>
                <div className="writer-info-wrapper">
                  {/* <div className="writer-image">
                    <img
                      src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/6850047f3ce8aff9ebe1389b_Writer%2002.avif"
                      loading="lazy"
                      alt="Writer Image"
                    />
                  </div> */}
                  <div className="writer-detail-wrapper">
                    <h3 className="writer-name">Christopher Parise</h3>
                    <div>Co-Founder at Ballpark</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-card-wrapper _02">
              <div className="testimonials-card _02">
                <p className="testimonials-text">
                  “Their knowledge transfer documentation was so good our
                  internal team took ownership faster than expected.”
                </p>
                <div className="writer-info-wrapper">
                  {/* <div className="writer-image">
                    <img
                      src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/6850047fa1f1309423ef204f_Writer%2006.avif"
                      loading="lazy"
                      alt="Writer Image"
                    />
                  </div> */}
                  <div className="writer-detail-wrapper">
                    <h3 className="writer-name">Peter Dixon</h3>
                    <div>CTO at MOBORE</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-card-wrapper _03">
              <div className="testimonials-card _03">
                <p className="testimonials-text">
                  “Their developers were super communicative and proactive,
                  identifying potential issues early.”
                </p>
                <div className="writer-info-wrapper">
                  {/* <div className="writer-image">
                    <img
                      src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/6850047fb98042bdb13a6869_Writer%2008.avif"
                      loading="lazy"
                      alt="Writer Image"
                    />
                  </div> */}
                  <div className="writer-detail-wrapper">
                    <h3 className="writer-name">Linda Morales</h3>
                    <div>CEO at Reeroll</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blur-block testimonial">
        <div className="blur-block-02"></div>
        <div className="blur-block-01"></div>
        <div className="blur-block-03"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;
