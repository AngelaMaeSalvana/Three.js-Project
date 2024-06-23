import React from 'react';
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';

const InfoBox = ({text,link,btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center 
                       neo-brutalism-blue py-4 px-8 
                       text-white mx-5'>
        Hi, I am <span className='font-semibold'>Angela</span>👋
        <br />
        A graduating student from the <span className='font-semibold'>University of Science  and Technology <br/> of Southern Philippines</span> Villanueva Campus
        </h1>
    ), 
    2: (
        <InfoBox
            text="I love creating beautiful, responsive websites and I'm always eager to learn new technologies and improve my skills."
            link="/about"
        />
    ),
    3: (
        <InfoBox
            text="Here, you’ll find a selection of projects that I’ve worked on, showcasing my skills in front-end development, problem-solving, and design."
            link="/projects"
            btnText="View Projects"
        />
    ),
    4: (
        <InfoBox
            text=" Looking for a dev for your team? I'm interested! Let's discuss how I can contribute. "
            link="/contact"
            btnText="Get in Touch"
        />
    ),
    
}


const HomeInfo = ({currentStage}) => {
    return  renderContent[currentStage] || null;
}
export default HomeInfo