import "./index.css";
import {FaBullhorn, FaRegTimesCircle, FaFileImport, FaChartBar, FaRegBell, FaCalendar   } from "react-icons/fa";
import {FaCircleCheck, FaCircleExclamation  } from "react-icons/fa6";
import {FiTarget  } from "react-icons/fi";
function Status() {
    return (
        <>
            <h3>Course Status</h3>
            <div className="wd-status-container">
                <button className="wd-flex-grow-1"><FaRegTimesCircle /> Unpublish</button>
                <button className="wd-flex-grow-1 wd-green-button"><FaCircleCheck /> Publish</button>
            </div>
            <br />
            <div className="wd-status-container">
                <button className="wd-flex-grow-1 wd-align-button-text"><FaFileImport /> Import Existing Content</button>
            </div>
            <div className="wd-status-container"><button className="wd-flex-grow-1 wd-align-button-text"><FiTarget /> Choose Home Page</button></div>
            <div className="wd-status-container"><button className="wd-flex-grow-1 wd-align-button-text"><FaChartBar /> View Course
                Stream</button></div>
            <div className="wd-status-container"><button className="wd-flex-grow-1 wd-align-button-text"><FaBullhorn /> New Announcement</button></div>
            <div className="wd-status-container"><button className="wd-flex-grow-1 wd-align-button-text"><FaChartBar /> New
                Analytics</button></div>
            <div className="wd-status-container"><button className="wd-flex-grow-1 wd-align-button-text"><FaRegBell /> View Course Notifications</button></div>

            <div className="wd-course-status-info-container "><h5>To Do</h5></div>
            <div className="wd-status-container"><a className="wd-red-link" href="#"><FaCircleExclamation /> Grade A1 - ENV + HTML</a></div>
            <div className="wd-status-container">100 pts | Sept 18th 11:59pm</div>
            <div className="wd-course-status-info-container"><h5 className="wd-flex-grow-2">Coming Up </h5><span className="wd-flex-grow-2"><FaCalendar /> <a className="wd-red-link" href="#"> View </a></span></div>
            <div className="wd-status-container"><FaCalendar /> <a className="wd-red-link" href="#">&emsp;Lecture</a></div>
            <div className="wd-status-container">CS4550.12631.202410</div>
            <div className="wd-status-container">Sept 11 at 6pm</div>
            <br />
            <div className="wd-status-container"><a className="wd-red-link" href="#"> 12 more in the next week...</a></div>
        </>
    );
}
export default Status;