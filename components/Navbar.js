import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const [showLinks, setshowLinks] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <div className="logo">logo</div>
        <div className={styles.navLink}>0 / 4420 staked</div>

        <div className={styles.links} id={showLinks ? styles.hidden : ""}>
          <div className={styles.navLink}>0 $ Amount</div>
          <div className={styles.navLink}>STATS</div>
          <div className={styles.navLink}>FAQ</div>
          <div className={styles.navLink}>Select Wallet</div>
        </div>

        <button onClick={() => setshowLinks(!showLinks)}>Open</button>
      </div>
    </nav>
  );
};

export default Navbar;
