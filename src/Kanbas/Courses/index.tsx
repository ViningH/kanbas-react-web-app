import { courses } from "../../Kanbas/Database";
import { HiMiniBars3 } from "react-icons/hi2";
import { Navigate, Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import KanbasNavigation from "../Navigation";
import { FaChevronDown } from "react-icons/fa";

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const currentPage = pathArray[pathArray.length - 1];
    return (
        <div className="wd-main-content">
            <nav className="wd-breadcrumb" aria-label="breadcrumb">
                <div>
                    <span className="float-end">
                        <div className="d-md-none">
                            <button className="wd-breadcrumb-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseCourseNavi"
                            ><FaChevronDown /></button>
                        </div>
                    </span>
                    <ol className="breadcrumb">
                        <button className="navbar-toggler wd-breadcrumb-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseKanbasNavi" aria-expanded="false"
                            aria-controls="collapseKanbasNavi"><HiMiniBars3 /></button>
                        <li className="breadcrumb-item"> <Link to={`/Kanbas/Courses/${course?._id}/Home`}>{course?._id} {course?.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
                    </ol>

                </div>
            </nav>
            <div className="collapse" id="collapseKanbasNavi">
                <div className="card card-body">
                    <ul className="wd-dropdown-navigation">
                        <li>
                            Account</li>
                        <li>
                            Dashboard
                        </li>
                        <li>Courses</li>
                        <li> Calendar</li>
                        <li> Inbox</li>
                        <li> History</li>
                        <li> Studio</li>
                        <li> Commons</li>
                        <li> Help</li>
                    </ul>
                </div>
            </div>
            <div className="collapse" id="collapseCourseNavi">
                <div className="card card-body">
                    <ul className="wd-dropdown-navigation">
                        <li>
                            Home
                        </li>
                        <li>

                            Modules
                        </li>
                        <li>Piazza</li>
                        <li>Assignments
                        </li>
                        <li> Quizzes</li>
                        <li>
                            Grades</li>
                        <li> People</li>
                    </ul>
                </div>
            </div>
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <div className="wd-tiny-course-text">{course?.name}</div>
                    <CourseNavigation />
                </div>
                <div className="wd-internal-content" >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>

        </div>
    );

}
export default Courses;