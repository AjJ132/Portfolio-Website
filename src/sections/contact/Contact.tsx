import React from 'react';

interface ContactProps {
    // define your props here
    id: string;
}

const Contact: React.FC<ContactProps> = ({id}) => {
    return (
        <div id={id} className='contact-section mt-4'>
            <p>penis</p>
        </div>
    );
}

export default Contact;