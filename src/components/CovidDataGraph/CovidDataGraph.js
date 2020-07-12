import React, { useEffect, useState } from 'react';
import './CovidDataGraph.css';
import { useParams } from 'react-router-dom';

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';



const CovidDataGraph = () => {
    const { countryName } = useParams();
    const [countryData, setCountryData] = useState([]);
    console.log(countryName);
    if (countryData) {
        console.log(countryData)
    }

    useEffect(() => {
        fetch('https://pomber.github.io/covid19/timeseries.json')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setCountryData(data[countryName])
                }
                else {
                    setCountryData(null)
                }

            });
    }, [countryName])
    return (
        <div>
            <div className="chart">
                <AreaChart
                    className="chartArea"
                    width={660}
                    height={320}
                    data={countryData}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="1 1" /> */}
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="confirmed" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="deaths" stroke="pink" fill="E1295A" />
                </AreaChart>
            </div>
        </div>
    );
};

export default CovidDataGraph;