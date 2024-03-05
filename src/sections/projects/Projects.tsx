import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';
import ProjectCard from './ProjectCard';
import GithubLogo from '../../assets/github_logo.png';


interface ProjectProps {
    // Define your props here
    id: string;
}

const Projects: React.FC<ProjectProps> = ({ id }) => {
    
   
    return (
        <div id={id} className='section mt-4'>
            <div className='w-full h-full flex flex-col justify-start items-start content-start gap-4'>
                <div className='section-title pl-8 pr-8'>
                    <p>Projects</p>
                    <h1>My Work</h1>
                </div>
                <div className='section-divider'></div>
                <ProjectsCarousel elements={[
                    <ProjectCard title='TeamTactics' subtitle='Team Management' 
                    information='Team Tactics is an innovative software project 
                    designed to improve the organizational skills and 
                    sustainability of student athletes by offering a simple, 
                    efficient, and comprehensive management solution. It aims to 
                    streamline the daily routines of student athletes and coaches,
                     enhancing their ability to balance education, sports, and 
                     personal time. The software features an intuitive user 
                     interface, advanced scheduling capabilities, and effective 
                     communication tools. By prioritizing ease of use, Team 
                     Tactics revolutionizes how student athletes and coaches 
                     navigate their challenging and rewarding journeys, aiming 
                     for a balanced lifestyle and improved organizational 
                     capabilities.' image={GithubLogo}/>,
                     <ProjectCard title='TeamTactics2' subtitle='Team Management' 
                    information='Team Tactics is an innovative software project 
                    designed to improve the organizational skills and 
                    sustainability of student athletes by offering a simple, 
                    efficient, and comprehensive management solution. It aims to 
                    streamline the daily routines of student athletes and coaches,
                     enhancing their ability to balance education, sports, and 
                     personal time. The software features an intuitive user 
                     interface, advanced scheduling capabilities, and effective 
                     communication tools. By prioritizing ease of use, Team 
                     Tactics revolutionizes how student athletes and coaches 
                     navigate their challenging and rewarding journeys, aiming 
                     for a balanced lifestyle and improved organizational 
                     capabilities.' image={GithubLogo}/>,
                     
                ]}/>
            </div>
        </div>
    );
}

export default Projects;