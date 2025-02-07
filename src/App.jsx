import {BrowserRouter, Route, Routes} from "react-router-dom"
import Auth from "./Pages/Auth/Auth"
import './App.css'
import Landing from "./Pages/Landing/Landing"

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/auth" element = {<Auth/>} />
     <Route path="/" element = {<Landing/>}/>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
