import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navigate, Route, Routes } from "react-router-dom";
import AccountBreadcrumb from "../AccountBreadcrumb/breadcrumb";
import AccountNavigation from "../Navigation";
import "../index.css";
function Profile() {
    return (
        <div className="wd-main-content">
            <AccountBreadcrumb />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <AccountNavigation />
                </div>
            </div>
        </div>
    );
}
export default Profile;