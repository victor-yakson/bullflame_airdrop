import React from "react";
import Link from "next/link";

const Contribution = () => {
  return (
    <section id="airdrop" class="contribution-area pt-130 pb-130">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="contribution-title">
              <h2 class="title">
                <span>$100,000</span> To Be Airdrop To The Community
              </h2>
            </div>
            <div class="progress-wrap">
              <ul class="list-wrap">
                <li>Start</li>
                <li>Half Way</li>
                <li>Completed</li>
              </ul>
              <div
                class="progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="83"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style={{ width: "83%" }}></div>
              </div>
              <h6 class="progress-title">
                Airdroped <span>1 BNB = 1,000 BFT</span>
              </h6>
            </div>
            <div class="contribution-btn">
              <Link href="/airdrop" class="btn">
                Claim BFT Airdrop{" "}
              </Link>
              <a href="https://t.me/Bullflametoken" class="btn btn-two">
                Join Our Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="contribution-shape-wrap">
        <img
          src="assets/img/images/contribution_shape01.png"
          alt=""
          class="alltuchtopdown"
        />
        <img
          src="assets/img/images/contribution_shape02.png"
          alt=""
          class="leftToRight"
        />
      </div>
    </section>
  );
};

export default Contribution;
