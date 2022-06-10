import React from "react";
import styles from "../styles/Home.module.css";

const VerticalNavbar = () => {
  return (
    <div className={styles.verticalNav}>
      <div className={styles.verticalNavLink}>Stake All</div>
      <div className={styles.verticalNavLink}>Unstake All</div>
      <div className={styles.verticalNavLink}>Earned Coins</div>
      <div className={styles.verticalNavLink}>Claim </div>
    </div>
  );
};

export default VerticalNavbar;
