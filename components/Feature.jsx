import React from "react";

const Feature = () => {
  const features = [
    {
      title: "Earn 10 BFT Tokens",
      description: " From each person that uses your link to claim the Airdrop.",
      image: "features_img01.png",
    },
    {
      title: "Receive 5 BFT Bonus",
      description: "Claim BFT using someone's link to get an extra bonus of 5 BFT tokens.",
      image: "features_img02.png",
    },
    // {
    //   title: "Protect the <br /> Identity",
    //   description: "Add new, trending and rare artwork to your collection.",
    //   image: "features_img03.png",
    // },
    // {
    //   title: "Security & Control Over Money",
    //   description: "Add new, trending and rare artwork to your collection.",
    //   image: "features_img04.png",
    // },
  ];
  return (
    <section id="feature" class="features-area pt-140 pb-110">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title text-center mb-70">
              <h2 class="title"> Refer And Earn More Airdrop </h2>
            </div>
          </div>
        </div>
        <div class="row">
          {features.map((feature, index) => (
            <div key={index + 1} class="col-lg-6">
              <div class="features-item">
                <div class="features-content">
                  <h2 class="title">
                    <a href="#!">{feature.title}</a>
                  </h2>
                  <p>{feature.description}</p>
                </div>
                <div class="features-img">
                  <img src={`assets/img/images/${feature.image}`} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
