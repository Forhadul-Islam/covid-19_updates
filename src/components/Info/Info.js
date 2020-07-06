import React from 'react';
import Navbar from '../Navbar/Navbar';
import covidImage from '../../images/—Pngtree—red covid-19 bacteria isolated on_5340587.png'

const Info = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <img style={{ height: "400px" }} src={covidImage} alt="covid img" />
                <div><h2>Under construction....</h2></div>
                <div><h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4></div>
            </div>
        </div>
    );
};

export default Info;