import React from 'react';
import './About.css';
import AboutCard from './AboutCard';
import SkillsCarousel from './SkillsCarousel';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCodeBranch, faDatabase, faPeopleGroup, faServer } from '@fortawesome/free-solid-svg-icons';






interface AboutProps {
    // Define your props here
    id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
    const skills = [
        'C#',
        '.NET',
        'JavaScript',
        'React',
        'TypeScript',
        'Docker',
        'Kubernetes',
        'Azure',
        'GitLab CI/CD',
        'PostgreSQL',
        'MSSQL',
        'MongoDB',
        'Golang',
        'HTML',
        'CSS',
    ];
   
    return (
        <div id={id} className='section mt-4'>
            <div className='w-full h-full flex flex-col justify-start items-start content-start gap-4'>
                <div className='section-title pl-8 pr-8'>
                    <p>About</p>
                    <h1>What I Do</h1>
                </div>
                <div className='section-divider'></div>
                <div className='about-cards-container pl-8 pr-8'>
                    <AboutCard 
                        title='Full-Stack Development' 
                        subtitle='Software Engineering' 
                        content='Experienced in full-stack development, specializing in C#, .NET, JavaScript, React, and Kubernetes. Led the development of a comprehensive CMMS at Haering Precision, improving maintenance tracking and system reliability.' 
                        icon={faReact}
                    />
                    <AboutCard 
                        title='Cloud & DevOps' 
                        subtitle='Kubernetes & CI/CD' 
                        content='Skilled in cloud technologies and DevOps practices, including Kubernetes, Docker, Azure, and GitLab CI/CD pipelines. Enhanced code quality and deployment speed for business-critical applications.' 
                        icon={faServer}
                    />
                    <AboutCard 
                        title='Database Management' 
                        subtitle='SQL & NoSQL' 
                        content='Proficient in database design and optimization with PostgreSQL, MSSQL, and MongoDB. Implemented performance improvements through index tuning and complex queries.' 
                        icon={faDatabase}
                    />
                    <AboutCard 
                        title='Web Technologies' 
                        subtitle='React & .NET' 
                        content='Developed dynamic web applications using React and .NET. Built and maintained scalable services like Superfluous Weather and ProServ, enhancing web functionality and user experience.' 
                        icon={faCode}
                    />
                    <AboutCard 
                        title='Open Source Contributions' 
                        subtitle='Innovative Projects' 
                        content='Contributed to open-source projects, including a Kubernetes-based scalable weather service and a Blazor WASM site for coach-athlete communication, using Golang, .NET, C#, and web technologies.' 
                        icon={faCodeBranch}
                    />
                    <AboutCard 
                        title='Leadership & Teamwork' 
                        subtitle='Collaboration & Mentorship' 
                        content='Demonstrated leadership in software development projects and student organizations. President of the Student Athlete Advisory Committee and member of the Provost’s Athletics Oversight Council.' 
                        icon={faPeopleGroup}
                    />
                </div>
            
                <SkillsCarousel items={skills}/>
            
            </div>
        </div>
        
    );
}

export default About;