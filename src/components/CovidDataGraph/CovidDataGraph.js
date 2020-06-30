import React from 'react';
import './CovidDataGraph.css';
import { useParams } from 'react-router-dom';

const CovidDataGraph = () => {
    const { countryName } = useParams();
    console.log(countryName)
    return (
        <div>
            <h2>this is praph page</h2>
        </div>
    );
};

export default CovidDataGraph;