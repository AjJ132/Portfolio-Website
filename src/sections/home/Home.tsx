import React from 'react';
import  ProfilePic  from '../../assets/Hero2.png';
import ProfilePicUnaffected2 from '../../assets/Hero2Alt2.png';
import ProfilePicUnaffected3 from '../../assets/Hero2Alt3.png';

import HeroDynamicShadow from './HeroDynamicShadow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface HomeProps {
    // Define your props here
    id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
    const backgroundImages = [
        ProfilePicUnaffected2,
        ProfilePicUnaffected3,
    ];
    return (
        <div id={id} className='section-lg'>
           <div className='w-full h-full flex flex-row items-center justify-center gap-20'>
                <div className='home-container'>
                    <div className='home-hero-title'>
                        <h1>AJ Johnson</h1>
                        <h2>Full Stack Software Engineer</h2>
                        <p>Complex Challenges, Practical Results</p>
                    </div>
                    <div className='section-divider'></div>
                    <div className='flex flex-col gap-8'>
                        <p>
                        As a Full Stack Software Engineer with a passion for efficiency and performance, 
                        I excel in various software technologies and thrive in challenging environments. 
                        My experience as a collegiate Division 1 Track and Field athlete has sharpened 
                        my leadership and time management skills, preparing me for collaborative work. 
                        Eager to grow and tackle new challenges, I'm ready to contribute to a dynamic team. 
                        Explore my projects or contact me to learn more.
                        </p>
                        {/* <div className='mt-12'>
                            <div className='section-title'>
                                <h2>Education</h2>
                            </div>
                        <div className='section-divider'></div>
                        </div>
                        <div className='flex flex-row gap-12'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={KSU_Logo} alt='KSU Logo' width={125}/>
                                <h3 className='mt-2'>Kennesaw State University</h3>
                                <h4>B.S. Software Engineering</h4>
                                <h4>Aug 2021 - May 2024</h4>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={KSU_Logo} alt='KSU Logo' width={125}/>
                                <h3 className='mt-2'>Kennesaw State University</h3>
                                <h4>M.S. Software Engineering</h4>
                                <h4>Aug 2024 - May 2026</h4>
                            </div>
                        </div> */}
                        <div className='mt-12'>
                            <h3>Connect With Me</h3>
                            <div className='flex flex-row gap-8 mt-8'>
                                <div className='home-container-envelope'>
                                    <a href="mailto:aj132@icloud.com" target="_blank" rel="noopener noreferrer" title="aj132@icloud.com">
                                        <FontAwesomeIcon icon={faEnvelope} size='3x' />
                                    </a>
                                </div>
                                <div className='home-container-linkedin'>
                                    <a href="https://www.linkedin.com/in/alan-johnson-a23819159" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} size='3x' />
                                    </a>
                                </div>
                                <div className='home-container-github'>
                                    <a href="https://github.com/AjJ132" target="_blank" rel="noopener noreferrer"> 
                                        <FontAwesomeIcon icon={faGithub} size='3x' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    {/* <img src={ProfilePic} alt="My picture" /> */}
                    <HeroDynamicShadow src={ProfilePic} backgroundImages={backgroundImages} />
                </div>
           </div>
        </div>
    );
}

export default Home;