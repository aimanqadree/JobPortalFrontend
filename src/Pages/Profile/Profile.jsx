import React from 'react'
import styles from './Profile.module.css'

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.headingimage}>
        <img className={styles.img} src="imageaiman.jpg" alt="Profile" />
      </div>
      
          <div>
      <div className={styles.details}>
        <h1>Aiman Jan</h1>
        <h4>Frontend Developer</h4>
        <p>at Infotechmon Pvt. Ltd</p>
        </div>

      <div>
        <ul>
          <li>Mohali,INDIA</li>
          <li>Fresher</li>
          <li>2,0400</li>
        </ul>

        <ul>
          <li>7006110177</li>
          <li>aimanQadree@gmail.com</li>
          <li>15 Days Or less</li>
        </ul>
        </div>
    </div>
    </div>
  )
}
export default  Profile


