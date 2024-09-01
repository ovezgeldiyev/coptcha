import React from "react";

export default function Join() {
  return (
    <section className="join">
      <div className="join__bg">
        <div className="join__bg-icon">
          <img src="/images/tg-big.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="join__inner">
          <div className="join__inner-image-wrapper">
            <div className="join__inner-image">
              <img src="/images/join.png" alt="" />
            </div>
          </div>
          <div className="join__inner-content">
            <h2>
              Need any <span>help ?</span>
            </h2>
            <p className="big">
              We are here for you ! Customer satisfaction is what we value the
              most. You can join our telegram group to ask us any question or
              talk to us about any issue you encountered. Our team is devoted
              and very responsive and will be glad to help you as best as we
              can. We offer support in English and French!
            </p>
            <a href="#" className="button primary">
              Join us on telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
