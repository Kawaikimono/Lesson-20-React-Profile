import React from "react";
import '../../styles/Style.css';
import Project from '../Project';
import Movie from '../../styles/MovieProject.png';
import Roomie from '../../styles/Roomease.png';

export default function Portfolio() {
    return (
        <div className='mainBody'>
        <h1 className="title">Portfolio</h1>
        <Project title="Sips & Cinema" pic={Movie} alt="Project Pic" details="Generate a random movie and drink of your choice." link="https://kawaikimono.github.io/Movies-n-Drinks/"/>
        <Project title="Roomease" pic={Roomie} alt="Project Pic" details="Helps keep track of roommate's task, events, and UOM's." link="https://roomease.herokuapp.com/"/>
        </div>
    )
}