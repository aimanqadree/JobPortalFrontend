import styles from "./signup.module.css"
import { useState } from "react"

function Signup({setType}){
    // const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("")
    const [data,setData] = useState({
        email: "",
        password: "",
        name: ""
    })

    function handleChange(label,e){
        setData({
            ...data,
            [label]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
    }
    return(
   <form className={styles.form} onSubmit={handleSubmit}>
    <h1 className={styles.top}>Create an account</h1>

    <label className={styles.labels}>Name</label>
    <input className={styles.inputs} type="text" onChange={(e)=>{handleChange("name",e)}} />

    <label className={styles.labels}>Email</label>
    <input  className={styles.inputs} type="text" placeholder="aiman@gmail.com" onChange={(e)=>{handleChange("email",e)}} />

    <label  className={styles.labels}>Password</label>
    <input  className={styles.inputs} type="password"  onChange={(e)=>{handleChange("password",e)}} />
    <button  className={styles.btn} type="submit">Signup</button>
    <p>Already have an account? <span  className={styles.p} onClick={()=>setType("signin")}>Sign in</span></p>


   </form>
    )
}
export default Signup