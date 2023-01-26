import React from 'react'
import styles from '../Footer/Footer.module.scss'
import Patreon_Aboutme from '../../containers/Footer/patreon_Aboutme'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Patreon_Aboutme></Patreon_Aboutme>
    </div>
  )
}

export default Footer
