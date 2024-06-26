import React from "react";

const FeatureTwo = () => {
  const features = [
    {
      title: " Liquid Mining",
      image: "features_two_img01.png",
    },
    {
      title: "Staking",
      image: "features_two_img02.png",
    },
    {
      title: "Play To Earn",
      image: "features_two_img03.png",
    },
  ];
  return (
    <section
      class="features-area-two features-bg"
      data-background="assets/img/bg/features_bg.png"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title text-center mb-70">
              <h2 class="title"> Roadmap</h2>
            </div>
          </div>
        </div>
        <div class="features-inner-wrap">
          <div class="features-item-wrap">
            <div class="row justify-content-center">
              {features.map((feature, index) => (
                <div key={index + 5} class="col-lg-4 col-md-6">
                  <div class="features-item-two">
                    <div class="features-img-two">
                      <img src={`assets/img/images/${feature.image}`} alt="" />
                    </div>
                    <div class="features-content-two">
                      <h2 class="title">{feature.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title section-title-two text-center">
                <h2 class="title">
                  The World's 1st ICO Platform That Offers Rewards
                  <img src="assets/img/images/title_img01.jpg" alt="" /> is a
                  groundbreaking platform that revolutionizes the way
                  <img src="assets/img/images/title_img02.jpg" alt="" />
                  Initial Coin Offerings are conducted
                </h2>
              </div>
            </div>
          </div>
          <div class="features-line-shape"></div>
        </div>
      </div>
      <div class="features-shape-wrap">
        <img
          src="assets/img/images/features_shape01.png"
          alt=""
          class="alltuchtopdown"
        />
        <img
          src="assets/img/images/features_shape02.png"
          alt=""
          class="leftToRight"
        />
      </div>
    </section>
  );
};

export default FeatureTwo;
