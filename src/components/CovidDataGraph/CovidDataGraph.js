import React, { useEffect, useState } from 'react';
import './CovidDataGraph.css';
import { useParams } from 'react-router-dom';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

;

// const data = [
//     {
//         name: 'Page A', Deaths: 4000, Cases: 2400, amt: 2400,
//     },
//     {
//         name: 'Page B', Deaths: 3000, Cases: 1398, amt: 2210,
//     },
//     {
//         name: 'Page C', Deaths: 2000, Cases: 9800, amt: 2290,
//     },
//     {
//         name: 'Page D', Deaths: 11780, Cases: 3908, amt: 2000,
//     },
//     {
//         name: 'Page E', Deaths: 1890, Cases: 4800, amt: 2181,
//     },
//     {
//         name: 'Page F', Deaths: 2390, Cases: 3800, amt: 2500,
//     },
//     {
//         name: 'Page G', Deaths: 3490, Cases: 4300, amt: 2100,
//     },
// ];

const CovidDataGraph = () => {
    const { countryName } = useParams();
    const [countryData, setCountryData] = useState(null);
    const data =
        countryData && countryData.map(data => ({
            name: Object.keys(data.ConfirmedDailyData),
            Cases: Object.values(data.ConfirmedDailyData),
            Deaths: Object.values(data.DeathsDailyData)

        }))

    if (countryData) {
        console.log(data)
    }


    useEffect(() => {
        fetch('https://www.accuweather.com/web-api/covid-timeseries?country=' + countryName)
            .then(res => res.json())
            .then(data => {
                console.log(data.ConfirmedDailyData);
                setCountryData([data]);

            })
    }, [countryName])
    return (
        <div>
            <div className="chart">
                <BarChart
                    width={700}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="2 2" />
                    {data && data.map(data => <XAxis dataKey={data.name} />)}
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Cases" fill="#8884d8" />
                    <Bar dataKey="Deaths" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default CovidDataGraph;