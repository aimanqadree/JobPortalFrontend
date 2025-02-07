import styles from  "./signin.module.css"
import { useState } from "react"

function SignIn({setType}){
    // const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("")
    const [data,setData] = useState({
        email: "",
        password: ""
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
    <h1 className={styles.top}>Login to your account</h1>

    <label className={styles.labels}>Email</label>
    <input className={styles.inputs} type="text" placeholder="aiman@gmail.com" onChange={(e)=>{handleChange("email",e)}} />

    <label className={styles.labels}>Password</label>
    <input className={styles.inputs} type="password"  onChange={(e)=>{handleChange("password",e)}} />
    <button className={styles.btn} type="submit">Login</button>
    <p>Don't have an account? <span className={styles.p} onClick={()=>setType("signup")}>Sign Up</span></p>

   </form>
    )
}
export default SignIn