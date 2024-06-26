import React from "react";

const Chart = () => {
  return (
    <div id="chart" class="chart-area pt-140">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title text-center mb-70">
              <h2 class="title"> Tokenomics</h2>
            </div>
          </div>
        </div>
        <div class="chart-inner-wrap">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="chart-wrap">
                <div class="chart">
                  <canvas id="doughnutChart"></canvas>
                </div>
                <div class="chart-tab">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="funding-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#funding-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="funding-tab-pane"
                        aria-selected="true"
                      >
                        Tokens Allocation{" "}
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="token-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#token-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="token-tab-pane"
                        aria-selected="false"
                      >
                        Token Distribution
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="funding-tab-pane"
                      role="tabpanel"
                      aria-labelledby="funding-tab"
                      tabindex="0"
                    >
                      <div class="chart-list">
                        <ul class="list-wrap">
                          <li>Liquidity Providing: : 70%</li>
                          <li>Airdrop Distribution: 20%</li>
                          <li>Marketing & Charity: 5%</li>
                          <li>Development & Team: 5%</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="token-tab-pane"
                      role="tabpanel"
                      aria-labelledby="token-tab"
                      tabindex="0"
                    >
                      <div class="chart-list">
                        <ul class="list-wrap">
                          <li>Liquidity Providing: : 70%</li>
                          <li>Airdrop Distribution: 20%</li>
                          <li>Marketing & Charity: 5%</li>
                          <li>Development & Team: 5%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-side-content">
                <img src="assets/img/images/chart_img.png" alt="" />
                <p>Token Details</p>
                <ul class="list-wrap">
                  <li>
                    <span>1</span>Token Name: Bullflame Token
                  </li>
                  <li>
                    <span>2</span>Total Max Supply: Total Max Supply
                  </li>

                  <li>
                    <span>3</span>Symbol: BFT
                  </li>
                  <li>
                    <span>4</span>Decimals: 18
                  </li>
                  <li>
                    <span>5</span>Network : BSC
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
