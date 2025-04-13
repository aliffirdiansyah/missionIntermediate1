import Content from "../components/Content"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import {courses} from "../data/Courses"

const Home = () => {
    return (
        <>
        <Navbar />
        <Hero />
        <Content courses={courses} /> 
        <NewsLetter />
        <Footer />
        </>
      )
}

export default Home