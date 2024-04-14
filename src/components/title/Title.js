import React from 'react';

function Title () {
    // console.log(props)
    return (
        // <p>{props.text}</p>
        <div>
            <Subtitle subtitle='Hello World'/>
        </div>
    );
}

function Subtitle ({subtitle}) {
    return (
        <h2>{subtitle}</h2>
    )
}

export default Title;