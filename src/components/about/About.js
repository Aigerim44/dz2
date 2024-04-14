import React from 'react';

function About({info}) {
    return (
        <div>
            <p>{info.title}</p>
            <p>{info.body}</p>
        </div>
    );
}

export default About;