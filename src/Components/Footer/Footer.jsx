import styles from "./Footer.module.scss";
import React from "react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={"container pt-4 px-4"}>
        <div
          className={
            styles.footerContent + " d-flex justify-content-between p-3"
          }
        >
          <span className={styles.header}>
            <span className={styles.firstChild}>M</span>
            ahmoud
            <span className={styles.lastChild}>/</span>
          </span>
          <div className={styles.rightfooter}>
            <a href="mailto:mahmoudsayed1612#gmail.com">
              <span className="me-4">mahmoudsayed1612@gmail.com</span>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100071474855041">
              <i className="fa-brands mx-1 fa-facebook"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/mahmouds10">
              <i className="fa-brands mx-1 fa-github"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mahmoud-sayed-15a66a2a8/">
              <i className="fa-brands mx-1 fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="tel://+201101804085">
              <i className="fa-brands mx-1 fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
