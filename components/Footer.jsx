import React from "react";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div
        class=" footer-bg"
        data-background="assets/img/bg/footer_bg.png"
      >
        <div class="container">
          <div class="footer-top">
            <div class="row">
              <div
                class="footer-widget"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h4 class="fw-title">Usefull Links</h4>
                <div class="footer-link ">
                  <ul
                    class="list-wrap"
                    style={{ display: "flex", gap: "20px" }}
                  >
                    {[
                      { name: "Telegram", link: "https://t.me/Bullflametoken" },
                      { name: "Blog", link: "https://blog.bullflame.com" },
                      {
                        name: "X (twitter)",
                        link: "https://x.com/Bullflame_token",
                      },
                      { name: "Mine BNB", link: "https://bullflame.com" },
                    ].map((menu, index) => (
                      <li key={menu}>
                        <a href={menu.link}>{menu.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="row">
              <div class="col-lg-12">
                <div class="copyright-text">
                  <p>Copyright © 2023 Bull flame. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-shape-wrap">
          <img
            src="assets/img/images/footer_shape01.png"
            alt=""
            class="alltuchtopdown"
          />
          <img
            src="assets/img/images/footer_shape02.png"
            alt=""
            class="leftToRight"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
