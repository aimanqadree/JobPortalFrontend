import React from 'react'
import styles from  "./navbar.module.css"

 function Navbar() {
  return (
    <div>
      <nav className={styles.Navbar}>
        <div>
          <h3 className={styles.logo}>SKILLMATCH</h3>
        </div>
        <button className={styles.btn}>Login</button>
      </nav>
    </div>
  )
}
export default Navbar
