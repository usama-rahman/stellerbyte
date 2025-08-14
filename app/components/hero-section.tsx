import BgBlurBlock from "../Styles/bg-blur-block";
import BannerBgBorder from "../Styles/banner-bg-border";

import Navbar from "./navbar";

const HeroSection = () => {
  return (
    <div>
      <div className="nav-banner-wrapper">
        <Navbar />

        <section className="banner-section">
          <div className="banner-wrapper">
            <div className="banner-heading-wrapper">
              <div className="banner-heading-block">
                <h3 className="banner-heading-text _01">Software Solutions</h3>

                <div className="name-text">- stellerbyte</div>
              </div>
            </div>

            <div className="w-layout-blockcontainer container w-container">
              <div className="w-layout-grid banner-counter-grid">
                <div className="counter-block projects-delivered">
                  <div className="counter-number-block">
                    <div className="counter-number-03">9+</div>
                  </div>
                  <div>Years of Experience</div>
                </div>
                <div className="counter-block client-satisfaction">
                  <div className="counter-number-block">
                    <div>93%</div>
                  </div>
                  <div>Client Satisfaction</div>
                </div>
                <div className="counter-block global-clients">
                  <div className="counter-number-block">
                    <div>78+</div>
                  </div>
                  <div>Projects Delivered</div>
                </div>
                <div className="counter-block expernices">
                  <div className="counter-number-block">
                    <div>83+</div>
                  </div>
                  <div>Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BgBlurBlock />

        <BannerBgBorder />
      </div>
    </div>
  );
};

export default HeroSection;
