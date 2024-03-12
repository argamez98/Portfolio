import React from "react";
import Section from "./Section";

const sections = [
{
    title: "About Me",
    body: "I'm a Computer science graduate with an A+ certification with a background in data anaylitics"
}
]

export default function About() {
    return (
        <div>
            <Section content = {sections} />
        </div>
    );
}
