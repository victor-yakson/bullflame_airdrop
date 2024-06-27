import React, { useState, useContext, useEffect } from "react";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { CONTEXT } from "../context/index";
import toast from "react-hot-toast";

const Referral = () => {
  const [referralLink, setReferralLink] = useState("");
  const {
    claimRefBonus,
    address,
    connect,
    loader,
    refBonus,
    refCount,
    totalRefBonus,
  } = useContext(CONTEXT);

  useEffect(() => {
    if (address) {
      const currentUrl = window.location.origin;
      setReferralLink(`${currentUrl}/airdrop?ref=${address}`);
    } else {
      setReferralLink("");
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
    <section className="referral-area">
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
                  className="referral-link-input"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-4">
            <div className="referral-reward-header">
              <h3 className="reward-title" style={{ textAlign: "center" }}>
                Claim Referral Reward
              </h3>
            </div>
            <div className="referral-reward-card">
              {address && (
                <div className="referral-reward-body">
                  <h3 className="reward-title">Referral Count: {refCount}</h3>

                  <h3 className="reward-title">
                    Referral Bonus: {refBonus} BFT
                  </h3>
                  <h3 className="reward-title">
                    Total Referral Bonus: {totalRefBonus} BFT
                  </h3>
                  <button
                    className="btn-primary btn btn-success "
                    onClick={handleClaimReward}
                    disabled={refBonus =="0.0"}
                  >
                    {loader ? "Loading..." : "Claim Referral Bonus"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
