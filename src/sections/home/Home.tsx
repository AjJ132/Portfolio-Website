import React from 'react';
import  ProfilePic  from '../../assets/Hero2.png';
import ProfilePicUnaffected from '../../assets/Hero2Alt.png';
import ProfilePicUnaffected2 from '../../assets/Hero2Alt2.png';
import ProfilePicUnaffected3 from '../../assets/Hero2Alt3.png';

import HeroDynamicShadow from './HeroDynamicShadow';

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
                    <h1>Hi!</h1>
                    <h3>My name is AJ and I am a full-stack software engineer</h3>
                    <div className='section-divider'></div>
                    <div className='flex flex-col gap-8'>
                        <p>
                        As a <strong>Full Stack Software Engineer</strong> with a
                        focus on efficiency and performance, I bring a diverse skill
                        set to the table. My expertise extends across various software
                        technologies, allowing me to tackle complex challenges
                        effectively.
                        </p>
                        <p>
                        In addition to my technical skills, I am a member of a
                        collegiate Division 1 Track and Field team, where I have honed
                        my <strong>leadership</strong> abilities and <strong>time management</strong> skills. My experiences in
                        competitive sports and student council committees have
                        equipped me with a strong foundation for collaborative
                        environments.
                        </p>
                        <p>
                        I am eager to join a dynamic team where I can continually grow
                        as a <strong>Software Engineer</strong> and confront new
                        challenges every day. Interested to learn more? Please take a
                        look at <a href="#projects">my projects</a> or feel free to <a href="#contact">contact me</a>.
                        </p>
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