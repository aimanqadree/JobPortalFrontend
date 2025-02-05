import React from 'react'
import SignIn from '../../Model/user/SignIn/Signin'
import Signup from '../../Model/user/SignUp/Signup'
import { useState } from 'react'

const Auth = () => {
  const [type,setType] = useState("signup")
  return (
    <div>
      {
        type === "signup"?
        <Signup setType={setType} />:
        <SignIn setType={setType} />
      }
    </div>
  )
}

export default Auth