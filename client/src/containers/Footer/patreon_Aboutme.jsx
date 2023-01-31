import React from 'react'
import styles from '../Footer/patreon_Aboutme.module.scss'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLanguage } from "react-icons/io5";

const Patreon_Aboutme = () => {
  return (
        <div>
            <div className={styles.container}>
              <div className={styles.borders}>
                <div className={styles.language}>
                  Language: English (United States)
                </div>
                <div className={styles.currency}>
                  Currency: USD
              </div>
            </div>
            <div className={styles.WhatisPatreon}>
                    What is Patreon 
                    <br />
                    By supporting creators you love on Patreon, you're becoming an active participant in their creative process.
                    <br/>
                    As a member, you receive exclusive content, community access, behind-the-scenes updates, and the pride of fueling work that matters to you.
                    <br />
                    <br />
                    CAN I CANCEL MY PLEDGE ANY TIME? 
                    <br />
                    Yes, you can easily cancel or upgrade your pledge at any time!
                  LEARN MORE 
                  <br />
                    <ul>LEARN MORE
                      <li><a href='https://www.patreon.com/about'> About </a> </li>
                      <li><a href='https://privacy.patreon.com/policies'>Privacy</a></li>
                      <li><a href='https://www.patreon.com/policy'> Policy & Terms </a></li>
                      <li><a href='https://www.patreon.com/policy/accessibility'>Accessibility</a></li>
                      <li><a href='https://support.patreon.com/hc/en-us/'> Help Center & FAQ </a></li>
                    </ul>
            </div>
          </div>
            <footer className={styles.location}>
              <div>
                © Patreon
                <a href='https://www.patreon.com/sitemap'>
                  Sitemap
                </a>
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
              <IoLogoInstagram className={styles.ig} /> <IoLogoTwitter className={styles.Twitter} /> <IoLogoFacebook className={styles.fb} />
            </div>
        </div>
          )
}

export default Patreon_Aboutme
