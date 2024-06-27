import React from "react";

const Hero = () => {
  return (
    <section
      class="banner-area banner-bg"
      data-background="assets/img/banner/banner_bg.png"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="banner-content text-center">
              <h2 class="title">
                Claim The Next Big Airdrop
                <br />
                <span>Bullflame Token Is Live</span>
              </h2>
              <p>
                A new token Launch on the Binance Smart Chain for trading,
                <br /> <br />
                staking and liquid mining
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-scroll-down">
        <a href="#airdrop" class="section-link">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div class="banner-shape-wrap">
        <img
          src="assets/img/banner/banner_shape01.png"
          alt=""
          class="leftToRight"
        />
        <img
          src="assets/img/banner/banner_shape02.png"
          alt=""
          class="alltuchtopdown"
        />
      </div>
    </section>
  );
};

export default Hero;
