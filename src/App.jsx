import {BrowserRouter, Route, Routes} from "react-router-dom"
import Auth from "./Pages/Auth/Auth"
import './App.css'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/auth" element = {<Auth/>} />
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
