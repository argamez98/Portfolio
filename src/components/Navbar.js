import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link className="logo" to="/"> My Logo </Link>
            <div class="navbar-right">
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <a href="https://drive.google.com/file/d/1PcYuX_8hKs8u1Hzt0N5PQixSFJU7nYQ5/view?usp=sharing" target="_blank">Resume</a>
                <a>Contact</a>
            </div>
        </div>
    );
}