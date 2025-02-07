import Navbar from "../../components/Navbar"
import Footer from "../../Model/Landing/Footer"
import Hero from "../../Model/Landing/Hero"
import Review from "../../Model/Landing/Review"

function Landing() {
    return (
        <>
            <Navbar/>
            <Hero />
            <Review/>
            <Footer/>
        </>
    )
}
export default Landing