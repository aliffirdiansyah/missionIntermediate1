import {courses} from "../data/Courses"
import CourseList from "../components/CourseList"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FilterBox from "../components/FilterBox"

const Courses = () => { 
return (
    <>
    <Navbar/>
    <div className="container py-5 mt-5">
        <div className="row mt-5">
            <div className="col">
                <h1 className="h2 fw-bold">Koleksi Video Pembelajaran Unggulan</h1>
                <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>
            </div>
        </div>
        <div className="row mt-5">
        <div className="col-3">
        <FilterBox />  
        </div>
        <div className="col-9">
        <CourseList courses={courses} />
        </div>
        </div>
    </div>
    <Footer />  
    </>
  )
}

export default Courses