import React, { useState } from "react";
import styles from "../LandingPage/LandingPage.module.css";
import CountUp from "react-countup";

export const LandingPage = () => {
  return (
    <div>
      <div className={styles.mainLandingPage}>
        <div className={styles.leftLandingPage}>
          <div className={styles.leftLandingPageContent}>
            <div className={styles.leftLandingPageText}>
              <h1 className={styles.text1}>Peaceful Shopping.</h1>
              <h1 className={styles.text2}>Mindful Money.</h1>
              <p>Unlock a World of Rewards with Every Swipe.</p>
            </div>
            <div className={styles.leftLandingPageBtn}>
              <button className={styles.leftLandingPageMainBtn}>
                Apply For Credit Cards
              </button>
            </div>
            <div className={styles.leftLandingPageRecord}>
              <div className={styles.HappyCustomerRecord}>
                <p>Happy Customer</p>
                <h1 style={{ color: "#0a0b5f" }}>
                  <CountUp start={0} end={35000} duration={2} delay={0} />+
                </h1>
              </div>
              <div className={styles.HappyCustomerRecord}>
                <p>Relationship Manager</p>
                <h1 style={{ color: "#A00015" }}>
                  <CountUp start={0} end={1500} duration={2} delay={0} />+
                </h1>
              </div>
              <div className={styles.HappyCustomerRecord}>
                <p>Banks & NBFC’s</p>
                <h1 style={{ color: "#0a0b5f" }}>
                  <CountUp start={0} end={100} duration={2} delay={0} />+
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightLandingPage}>
          <img
            className={styles.rightLandingPageImg}
            src="/Images/mainHomepageImg.png"
            alt="Girl With Credit Card Image"
          />
        </div>
      </div>
    </div>
  );
};
