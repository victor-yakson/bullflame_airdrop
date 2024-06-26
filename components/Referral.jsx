import React, { useState, useContext, useEffect } from "react";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { CONTEXT } from "../context/index";
import toast from "react-hot-toast";

const Referral = () => {
  const [referralLink, setReferralLink] = useState("");
  const { claimRefBonus, address, connect, loader } =
    useContext(CONTEXT);
  useEffect(() => {
    if (address) {
      // Assuming your website URL is "https://example.com"
      const websiteUrl = "https://bullflame.com/airdrop";
      setReferralLink(`${websiteUrl}?ref=${address}`);
    } else {
      setReferralLink(""); // Reset referral link if user is not connected
    }
  }, [address]);

  const copyToClipboard = () => {
    if (referralLink) {
      navigator.clipboard.writeText(referralLink);
      toast.success("Referral link copied to clipboard!");
    }
  };

  const handleClaimReward = async () => {
    if (!address) {
      connect();
    } else {
      await claimRefBonus();
    }
  };

  return (
    <section className="referral-area pt-4 pb-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="referral-info-card">
              <div className="referral-info-header">
                <HiOutlineClipboardDocument
                  className="clipboard-icon"
                  onClick={copyToClipboard}
                />
                <h3 className="referral-title">Your Referral Link</h3>
              </div>
              <div className="referral-info-body">
                <input
                  type="text"
                  value={referralLink}
                  disabled
                  className="form-control referral-link-input"
                />
                {referralLink && (
                  <button
                    className="btn btn-primary btn-copy"
                    onClick={copyToClipboard}
                  >
                    Copy Link
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-4">
            <div className="referral-reward-card">
              <div className="referral-reward-header">
                <h3 className="reward-title">Claim Referral Reward</h3>
              </div>
              <div className="referral-reward-body">
                {address  && (
                  <button className="btn btn-success btn-block"
                  onClick={handleClaimReward}
                  >
                    {loader ? "Loading..." : " Claim referal bonus"}
                  </button>
                ) }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
