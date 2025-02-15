import React from 'react'
import styles from './Profile.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { PiSuitcaseSimple } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { RxPencil1 } from "react-icons/rx";

function Profile() {
  return (
    <div className= {styles.main}>
    <div className={styles.container}>

      <div className={styles.box1}>
        <img className={styles.img} src="imageaimann.jpg" alt="Profile" />
      </div>

      <div className={styles.box2}>

        <div className={styles.details}>
          <h1>Aiman Jan <RxPencil1 className={styles.headinglogue} /></h1>
          <h4>Frontend Developer</h4>
          <p>at Infotechmon Pvt. Ltd</p>
        </div>

        <div className= {styles.location}>

          <ul className={styles.lists}>
            <li> <IoLocationOutline /> Mohali,INDIA</li>
            <li> <PiSuitcaseSimple /> Fresher</li>
            <li> <CiWallet />  ₹ 2,04000</li>
          </ul>

          <ul className={styles.lists}>
            <li> <CiPhone /> 7006110177</li>
            <li> <MdMailOutline />aimanQadree@gmail.com</li>
            <li> <IoCalendarClearOutline />15 Days Or less</li>
          </ul>
        </div>
      </div>
    </div>
    <New/>
    </div>
  )
}
export default Profile

function New(){
  const object = [
    {
      name:"Resume",
      link: "#"
    },
    {
      name:"Resume headline",
      link: "#"
    },
    {
      name:"Key skills",
      link: "#"
    },
    {
      name:"Employment",
      link: "#"
    },
    {
      name:"Education",
      link: "#"
    },
    {
      name:"IT skills",
      link: "#"
    },
    {
      name:"Projects",
      link: "#"
    },
    {
      name:"Profile summary",
      link: "#"
    },
    {
      name:"Accomplishments",
      link: "#"
    },
    {
      name:"Career profile",
      link: "#"
    },
    {
      name:"Personal details",
      link: "#"
    }

  ]
  return(
    <div className= {styles.secondcontainer}>
    <h2 className={styles.heading2}>Quick Links</h2>
    <div>
        {
          object.map((item,index)=>(
            <div className={styles.boxes} key={index}>{item.name}</div>
          ))
        }
    </div>
    </div>
  )
}



