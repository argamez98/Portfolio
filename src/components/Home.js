import React from "react";
import Section from './Section';

export default function Home() {
    const sections = [
        {
            title: 'Ariel Gamez',
            body:'Software Developer'
        }

    ]
    return (
        <div>
            <Section content= {sections} />
        </div>
       );
}
