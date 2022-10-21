import React from "react";

export default function Navbar() {
    return (
        <div className="navbar">
            <a className="logo"> My Logo </a>
            <div class="navbar-right">
                <a href="aboutme">About Me</a>
                <a href="projects">Projects</a>
                <a href="https://drive.google.com/file/d/1PcYuX_8hKs8u1Hzt0N5PQixSFJU7nYQ5/view?usp=sharing" target="_blank">Resume</a>
                <a>Contact</a>
            </div>
        </div>
    );
}