import "./signup.module.css"
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
   <form onSubmit={handleSubmit}>
    <h1>Sign up</h1>

    <label>Name</label>
    <input type="text" onChange={(e)=>{handleChange("name",e)}} />

    <label>Email</label>
    <input type="text" placeholder="aiman@gmail.com" onChange={(e)=>{handleChange("email",e)}} />

    <label>Password</label>
    <input type="text"  onChange={(e)=>{handleChange("password",e)}} />
    <button type="submit">Signup</button>
    <p>Already have an account? <span onClick={()=>setType("signin")}>Sign in</span></p>


   </form>
    )
}
export default Signup