import React from "react";
import styles from "../styles/Home.module.css";

const NftCard = () => {
  return (
    <div className={styles.nftCard}>
      <div className={styles.glass}></div>
      <div>Blockchain Bully #</div>
      <img className={styles.nftImage} src="" alt="" />
      <div className={styles.footerNft}>
        <div className={styles.footerFirst}>
          <div>dog Years coin</div>
          <div>Per Day</div>
        </div>
        <div>Claim </div>
      </div>
    </div>
  );
};

export default NftCard;
