import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';
import ProjectCard from './ProjectCard';
import SW1 from '../../assets/sw1.png';
import SW2 from '../../assets/sw2.png';
import StrideSync1 from '../../assets/stridesync1.png';
import StrideSync2 from '../../assets/stridesync2.png';


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
                    
                     <ProjectCard 
                        title='Superfluous Weather' 
                        subtitle='Scalable Weather Services on Kubernetes' 
                        information='
                            "Superfluous Weather" is a Kubernetes showcase project designed to deepen my understanding of Kubernetes and the deployment of scalable services. This project features a straightforward weather service that delivers weather forecasts for cities. Constructed atop a Kubernetes cluster, it integrates a Postgres database for user authentication and a MongoDB database for rudimentary caching. Monitoring is accomplished through Grafana and Prometheus. Initially deployed on Azure Kubernetes Service, the project was eventually decommissioned to mitigate costs. The primary objective of "Superfluous Weather" was to enhance my skills in containerization and cluster management.'
                        images={[SW1, SW2]}
                        githubButton={true}
                        githubLink='https://github.com/AjJ132/superfluous-weather-app'
                        /> ,
                        <ProjectCard 
    title='Stride Sync' 
    subtitle='Track & Field Data Aggregator' 
    information='
        "Stride Sync" is an iOS application that leverages web scraping technology to aggregate track and field meet information from diverse online sources. It meticulously compiles data such as results, venue locations, and event dates, presenting it to users in a streamlined and organized interface. The backend architecture of the application features a MongoDB database, utilizes Azure Functions for serverless APIs, and employs containerized services for the web scraping processes.'
    images={[StrideSync1, StrideSync2]}/>
,
                        
                     
                ]}/>
            </div>
        </div>
    );
}

export default Projects;