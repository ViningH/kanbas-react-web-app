import { courses } from "../../Kanbas/Database";
import { HiMiniBars3 } from "react-icons/hi2";
import { Navigate, Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Assignments from "./Assignments";
function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const currentPage = pathArray[pathArray.length - 1];
    return (
        <div>
            <div className="wd-breadcrumb" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <button className="wd-breadcrumb-button"><HiMiniBars3 /></button>
                    <li className="breadcrumb-item"> <Link to={`/Kanbas/Courses/${course?._id}/Home`}>{course?.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
                </ol>
                    
            </div>
            <div className="wd-tiny-course-text">{course?.name}</div>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "80px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
export default Courses;