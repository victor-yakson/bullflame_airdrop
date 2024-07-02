import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { saveAs } from "file-saver";
import { BsLinkedin, BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { TwitterMomentShare } from "react-social-media-embed";
import { Linkedin, Twitter, Instagram, Follow } from "./index";
import { CONTEXT } from "../context/index";
import toast from "react-hot-toast";

const Verify = () => {
  const { claimAirdrop, notifyError, address, connect, loader, claimStatus } =
    useContext(CONTEXT);
  const router = useRouter();
  const [referralLink, setReferralLink] = useState("");

  const [user, setUser] = useState({
    twitterId: "",
    referee: "",
  });

  useEffect(() => {
    const { ref } = router.query;
    if (ref) {
      setUser((prevUser) => ({ ...prevUser, referee: ref }));
    }
  }, [router.query]);

  useEffect(() => {
    if (address) {
      const currentUrl = window.location.origin;
      setReferralLink(`${currentUrl}/airdrop?ref=${address}`);
    } else {
      setReferralLink("");
    }
  }, [address]);

  const handleFormFieldChange = (fieldName, e) => {
    setUser({ ...user, [fieldName]: e.target.value });
  };

  const handleImage = () => {
    let url = `token.png`;
    saveAs(url, `@bullflametoken`);
  };

  const ADD_TOKEN = async () => {
    try {
      const tokenAddress = "0xAD6b79f1D3BB1c75b5aef80dF7239F4a5674F81c"; // Replace with your token's contract address
      const tokenSymbol = "BFT"; // Replace with your token's symbol
      const tokenDecimals = 18; // Replace with your token's decimals
      const tokenImage =
        "https://blog.bullflame.com/wp-content/uploads/2024/04/BFLogo-300x300.png";

      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Specify the token standard
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });

      if (wasAdded) {
        toast.success("Token added to wallet!");
      } else {
        toast.error("Failed to add token to wallet.");
      }
    } catch (error) {
      console.error("Error adding token to wallet:", error);
      toast.error("An error occurred while adding the token.");
    }
  };

  const CALLING_AIRDROP = async () => {
    const { twitterId, referee } = user;

    console.log(user);

    if (!twitterId) {
      return notifyError("Provide all details to claim airdrop");
    }

    await claimAirdrop({
      referee: referee || "0x0000000000000000000000000000000000000000",
    });
  };

  return (
    <section className="contact-area pt-140 pb-140">
      <div className="container">
        <div className="contact-info-wrap contact-info-item">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-item">
                <div className="icon">
                  <i className="fas">
                    <BsTwitterX />
                  </i>
                </div>
                <div className="content">
                  <h6 className="title">Twitter</h6>
                  <p style={{ fontSize: "100%" }}> 1. Copy the below message</p>
                  <p style={{ fontSize: "100%" }}>
                    {" "}
                    2. Make a post on X & provide your URL in this post id
                    section to be able to claim the Airdrop
                  </p>
                  <Twitter
                    user={user}
                    handleClick={(e) => handleFormFieldChange("twitterId", e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="content"
               
              >
                {address !== "" && claimStatus === true ? (
                  <button className="btn margin-btn-new">
                    {loader ? "loading..." : "Already Claimed Airdrop"}
                  </button>
                ) : address !== "" && claimStatus === false ? (
                  <>
                    <button
                      onClick={() => CALLING_AIRDROP()}
                      className="btn margin-btn-new"
                    >
                      {loader ? "loading..." : "Claim Airdrop"}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => connect()}
                    className="btn margin-btn-new"
                  >
                    Connect Wallet
                  </button>
                )}
                <button
                  onClick={() => ADD_TOKEN()}
                  className="btn margin-btn-new"
                >
                  {loader ? "loading..." : "Add Token"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrap">
          <div className="row g-0">
            <div className="col-57 order-0 order-lg-2">
              <div className="contact-form">
                <h4 className="title">Post Details</h4>
                <p>
                  In the Post, ensure to tag your friends and use some hashtags
                  to increase our community visibility. eg: @bft
                  #bft & lots more
                </p>
                <div id="contact-form">
                  <div className="form-grp">
                    <HiOutlineClipboardDocument
                      className="new-cursour"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `🚀 Claim a free 💰250 BFT Airdrop tokens worth $150. 🤑Earn An extra Bonus of 5 BFT💡 🌍Refer & Earn 10 BFT Tokens on each person.💰Claim Now @Bullflametoken Get started  using my link.${referralLink} `
                        );
                        toast.success("copied!");
                      }}
                    />
                    <textarea
                      name="message"
                      readOnly
                      placeholder={`🚀 Claim a free 💰250 BFT Airdrop tokens worth $150. 🤑Earn An extra Bonus of 5 BFT💡 🌍Refer & Earn 10 BFT Tokens on each person.💰Claim Now @Bullflametoken Get started  using my link.${referralLink}
                                              `}
                    ></textarea>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    {" "}
                    <button className="btn ">Join Our Telegram </button>
                    <button onClick={() => handleImage()} className="btn">
                      Download Image
                    </button>
                  </div>
                </div>
                <p className="ajax-response mb-0"></p>
              </div>
            </div>
            <div className="col-43">
              <div className="contact-map">
                <img src="token.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verify;
