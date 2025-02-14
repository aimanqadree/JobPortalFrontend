import React from 'react'
import styles from './Profile.module.css'

function Profile() {
  return (
    <div className={styles.container}>

      <div className={styles.box1}>
        <img className={styles.img} src="imageaimann.jpg" alt="Profile" />
      </div>

      <div className={styles.box2}>

        <div className={styles.details}>
          <h1>Aiman Jan</h1>
          <h4>Frontend Developer</h4>
          <p>at Infotechmon Pvt. Ltd</p>
        </div>

        <div className= {styles.location}>

          <ul className={styles.lists}>
            <li>Mohali,INDIA</li>
            <li>Fresher</li>
            <li>2,04000</li>
          </ul>

          <ul className={styles.lists}>
            <li>7006110177</li>
            <li>aimanQadree@gmail.com</li>
            <li>15 Days Or less</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Profile


