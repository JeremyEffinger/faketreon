import React from "react";
import styles from "../Footer/patreon_Aboutme.module.scss";
import { Link } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLanguage,
} from "react-icons/io5";

const Patreon_Aboutme = (props) => {
  return (
    <div>
      <Link to="/">
          <svg height="79.83496848435058" className='css-1j8o68f' viewBox="-5 0 79.2062113951638 79.83496848435058" width="79.2062113951638"><defs id="SvgjsDefs1762"><linearGradient id="SvgjsLinearGradient1767"><stop id="SvgjsStop1768" stopColor="#00ddff" offset="0"></stop><stop id="SvgjsStop1769" stopColor="#ff00d4" offset="1"></stop></linearGradient></defs><g id="SvgjsG1763" featurekey="FRM3ZD-0" transform="matrix(5.508457183837891,0,0,5.508457183837891,-14.195267963964659,-30.470234391760762)" fill="url(#SvgjsLinearGradient1767)"><path d="M17.607 10.9648 l-13.59 0 l0 2.1824 l9.0599 0 l0 2.3476 l-9.0599 0 l0 4.5299 l-2.3477 0 l0 -11.407 l15.938 0 l0 2.3476 z"></path></g></svg>
        </Link>
      <div className={styles.container}>
        <div className={styles.borders}>
          <div className={styles.language}>
            Language: English (United States)
          </div>
          <div className={styles.currency}>Currency: USD</div>
        </div>
        <div className={styles.WhatisPatreon}>
          What is Patreon
          <br />
          By supporting creators you love on Patreon, you're becoming an active
          participant in their creative process.
          <br />
          As a member, you receive exclusive content, community access,
          behind-the-scenes updates, and the pride of fueling work that matters
          to you.
          <br />
          <br />
          CAN I CANCEL MY PLEDGE ANY TIME?
          <br />
          Yes, you can easily cancel or upgrade your pledge at any time! LEARN
          MORE
          <br />
          <ul>
            LEARN MORE
            <li>
              <a href="https://www.patreon.com/about"> About </a>{" "}
            </li>
            <li>
              <a href="https://privacy.patreon.com/policies">Privacy</a>
            </li>
            <li>
              <a href="https://www.patreon.com/policy"> Policy & Terms </a>
            </li>
            <li>
              <a href="https://www.patreon.com/policy/accessibility">
                Accessibility
              </a>
            </li>
            <li>
              <a href="https://support.patreon.com/hc/en-us/">
                {" "}
                Help Center & FAQ{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer className={styles.location}>
        <div>
          © Patreon
          <a href="https://www.patreon.com/sitemap">Sitemap</a>
        </div>
        600 Townsend Street, Suite 500
        <br />
        San Francisco, CA 94103
        <br />
        USA
        <br />
        Phone: +1 (833) 972-8766
      </footer>
      <div className={styles.logoz}>
        <IoLogoInstagram className={styles.ig} />{" "}
        <IoLogoTwitter className={styles.Twitter} />{" "}
        <IoLogoFacebook className={styles.fb} />
      </div>
    </div>
  );
};

export default Patreon_Aboutme;
