import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = () => {
    return (
        <div className="about">
            <h1>About us</h1>
            <p>this is about us page</p>
            <Outlet />
            <ProfileClass />
        </div>
    )
}

export default About;