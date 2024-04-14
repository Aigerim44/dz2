import React from 'react';
import Title from "../../components/title/Title";
import About from "../../components/about/About";

function MainPage(props) {
    return (
        <div>
            <Title/>
            <About info={{ title: "Some Title", body: "Some body" }} />

        </div>
    );
}

export default MainPage;