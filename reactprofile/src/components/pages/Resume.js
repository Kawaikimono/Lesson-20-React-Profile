import React from "react";
import '../../styles/Style.css';
import File from "../../styles/resume.pdf"

export default function Resume() {
    return (
        <div className='mainBody'>
        <h1 className="title">Resume</h1>
        <h3 className="resume"><a href={File} download="Aly Geiger Resume.pdf">Download My Resume Here</a></h3>
        </div>
    )
}

