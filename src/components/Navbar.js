import React from "react";

export default function Navbar (){
    return (
        <header>
            <div className="navbar md:sticky top-0 z-10">
                <a href="">About Me</a>
                <a>Projects</a>
                <a href="https://drive.google.com/file/d/1PcYuX_8hKs8u1Hzt0N5PQixSFJU7nYQ5/view?usp=sharing">Resume</a>
                <a>Contact</a>
            </div>
        </header>
    );
}