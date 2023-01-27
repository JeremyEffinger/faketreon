import React from 'react'
import styles from '../Footer/patreon_Aboutme.module.scss'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";

const Patreon_Aboutme = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.language}>Language: English (United States)</div>
        <div className={styles.currency}>Currency: USD</div>
      </div>
          <div className={styles.aboutme}>
            WHAT IS PATREON?
          </div> 
          <div className={styles.summary}>
              By supporting creators you love on Patreon, you're becoming an active participant in their creative process. As a member, you receive exclusive content, community access, behind-the-scenes updates, and the pride of fueling work that matters to you.
          </div>
          <div className={styles.cancel}>
                      CAN I CANCEL MY PLEDGE ANY TIME? <br />
              Yes, you can easily cancel or upgrade your pledge at any time!
          </div>
          <div className={styles.learnmoreContainer}>
          LEARN MORE <br />
            <ul>
              <li>About</li>
              <li>Privacy</li>
              <li>Policy & Terms</li>
              <li>Accessibility</li>
              <li>Help Center & FAQ</li>
            </ul>
          </div>
          <div className={styles.logoz}>
          <IoLogoInstagram /> <IoLogoTwitter /> <IoLogoFacebook />
          </div>
          <div>
            ©Patreon Sitemap
          </div>
          <footer className={styles.location}>
          600 Townsend Street, Suite 500 <br />
          San Francisco, CA 94103 <br />
          USA <br />
          Phone: +1 (833) 972-8766
          </footer>
    </div>
  )
}

export default Patreon_Aboutme
