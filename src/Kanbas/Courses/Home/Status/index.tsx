import "./index.css";
function Status() {
    return (
        <>
        <h3>Course Status</h3>
        <div className="wd-status-container">
      <button className="wd-flex-grow-1"><i className="fa-regular fa-circle-xmark"></i> Unpublish</button>
      <button className="wd-flex-grow-1 wd-green-button"><i className="fa fa-check-circle"></i> Publish</button>
    </div>
    <br />
    <div className="wd-status-container">
      <button className="wd-flex-grow-1 wd-align-button-text"><i className="fa-solid fa-file-import"></i> Import Existing Content</button>
    </div>
    <div className="wd-status-container"><button className="wd-flex-grow-1 wd-align-button-text"><i className="fa-regular fa-circle-dot"></i> Choose Home Page</button></div>
    <div className="wd-status-container"><button className="wd-flex-grow-1 wd-align-button-text"><i className="fa-solid fa-chart-bar"></i> View Course
        Stream</button></div>
    <div className="wd-status-container"><button className="wd-flex-grow-1 wd-align-button-text"><i className="fa-solid fa-bullhorn"></i> New Announcement</button></div>
    <div className="wd-status-container"><button className="wd-flex-grow-1 wd-align-button-text"><i className="fa-solid fa-chart-bar"></i> New
        Analytics</button></div>
    <div className="wd-status-container"><button className="wd-flex-grow-1 wd-align-button-text"><i className="fa-regular fa-bell"></i> View Course Notifications</button></div>
    
    <div className="wd-course-status-info-container "><h5>To Do</h5></div>
    <div className="wd-status-container"><a className="wd-red-link" href="#"><i className="fa-solid fa-circle-exclamation"></i> Grade A1 - ENV + HTML</a></div>
    <div className="wd-status-container">100 pts | Sept 18th 11:59pm</div>
    <div className="wd-course-status-info-container"><h5 className="wd-flex-grow-2">Coming Up </h5><span className="wd-flex-grow-2"><i className="fa fa-calendar"></i> <a className="wd-red-link" href="#"> View </a></span></div>
    <div className="wd-status-container"><i className="fa-solid fa-calendar"> </i> <a className="wd-red-link" href="#">&emsp;Lecture</a></div>
    <div className="wd-status-container">CS4550.12631.202410</div>
    <div className="wd-status-container">Sept 11 at 6pm</div>
    <br />
    <div className="wd-status-container"><a className="wd-red-link" href="#"> 12 more in the next week...</a></div>
        </>
    );
}
export default Status;