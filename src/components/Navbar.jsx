import React from "react";
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <div className={styles.nav}>
    <div>
      <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="" width="100px" height="40px" />
    </div>
    <div>
      <div className={styles.name}>John Wick</div>
      <div className={styles.role}>Developer</div>
    </div>
  </div>
  );
};
