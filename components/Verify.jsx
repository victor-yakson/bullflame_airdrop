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
    instagramUrl: "",
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

  const CALLING_AIRDROP = async () => {
    const { twitterId, instagramUrl, referee } = user;

    console.log(user);

    if (!instagramUrl || !twitterId) {
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
                  <p> 1. Copy the below message</p>
                  <p> 2. Make a post on X & provide your URL</p>
                  <Twitter
                    user={user}
                    handleClick={(e) => handleFormFieldChange("twitterId", e)}
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-item">
                <div className="icon">
                  <i className="fas">
                    <BsInstagram />
                  </i>
                </div>
                <div className="content">
                  <h6 className="title">Instagram</h6>
                  <p> 1. Copy the below message</p>
                  <p> 2. Make a post on X & provide your UR</p>
                  <Instagram
                    user={user}
                    handleClick={(e) =>
                      handleFormFieldChange("instagramUrl", e)
                    }
                  />
                </div>
              </div>
            </div> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              {/* <div className="contact-info-item"> */}
              {/* <div className="icon">
                  <i className="fas">
                    <FaUser />
                  </i>
                </div> */}
              <div className="content">
                {address !== "" && claimStatus === true ? (
                  <button className="btn margin-btn-new">
                    {loader ? "loading..." : "Already Claim Airdrop"}
                  </button>
                ) : address !== "" && claimStatus === false ? (
                  <button
                    onClick={() => CALLING_AIRDROP()}
                    className="btn margin-btn-new"
                  >
                    {loader ? "loading..." : "Claim Airdrop"}
                  </button>
                ) : (
                  <button
                    onClick={() => connect()}
                    className="btn margin-btn-new"
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
              {/* </div> */}
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
                  <div className="row">
                    {/* <div className="col-md-6">
                      <HiOutlineClipboardDocument
                        className="new-cursour"
                        onClick={() =>
                          navigator.clipboard.writeText("Twitter @TheBCoders")
                        }
                      />
                      <div
                        className="form-grp"
                        onClick={() =>
                          navigator.clipboard.writeText("Twitter @TheBCoders")
                        }
                      >
                        <input
                          type="text"
                          disabled
                          placeholder="Twitter @Bullflame_token"
                        />
                      </div>
                    </div> */}
                    {/* <div className="col-md-6">
                      <HiOutlineClipboardDocument
                        className="new-cursour"
                        onClick={() =>
                          navigator.clipboard.writeText(
                            "Instgram: @Bullflame token"
                          )
                        }
                      />
                      <div className="form-grp">
                        <input
                          type="text"
                          disabled
                          placeholder="Instgram: @Bullflame token"
                        />
                      </div>
                    </div> */}

                    {/* <div className="col-md-6">
                      <HiOutlineClipboardDocument
                        className="new-cursour"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            "Website: https://www.bullflame.com/"
                          );
                          toast.success("copied!");
                        }}
                      />
                      <div className="form-grp">
                        <input
                          type="text"
                          disabled
                          placeholder="Website: https://www.bullflame.com/"
                        />
                      </div>
                    </div> */}
                  </div>
                  <div className="form-grp">
                    <HiOutlineClipboardDocument
                      className="new-cursour"
                      onClick={() => {
                        navigator.clipboard
                          .writeText(`  🚀 Claim a free 💰250 BFT Airdrop tokens worth $150. 🤑Earn An extra Bonus of 5 BFT💡 🌍Refer & Earn 10 BFT Tokens on each person.  💰Claim Now (Link)
                         
                         @Bullflametoken @Bullflame_token #airdrop #crypto #bsc   
                        Get started  using my link.
                         ${referralLink}
                                              `);
                        toast.success("copied!");
                      }}
                    />
                    <textarea
                      name="message"
                      disabled
                      placeholder={`🚀  🚀 Claim a free 💰250 BFT Airdrop tokens worth $150. 🤑Earn An extra Bonus of 5 BFT💡 🌍Refer & Earn 10 BFT Tokens on each person.  💰Claim Now (Link) @Bullflametoken @Bullflame_token #airdrop #crypto #bsc. Get started  using my link. ${referralLink}
     `}
                    >
                      {" "}
                    </textarea>
                  </div>
                  <button onClick={() => handleImage()} className="btn">
                    Download Image
                  </button>
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
