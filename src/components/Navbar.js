import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar px-6 py-6 sticky">
            <Link className="logo" to="/"> My Logo </Link>
            <div class="float-right">
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <a href="https://drive.google.com/file/d/1k44zfKJuUgoXDOtDerreqj8j51wiP0MQ/view?usp=share_link" target="_blank">Resume</a>
                <a>Contact</a>
            </div>
        </div>
    );
}