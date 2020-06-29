import React, { useState } from 'react';
import { useEffect } from 'react';
import './Covid19.css';
import Covid19DataTable from './Covid19DataTable';

const Covid19 = () => {
    const [covidData, setCovidData] = useState(null);
    const [bangladeshCases, setBangladeshCases] = useState(null);
    if (covidData) {
        // console.log(covidData)
        // console.log(bangladeshCases);

    }
    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(data => {
                setCovidData(data);
                const bangladesh = data.find(data => data.country.toLowerCase() === 'bangladesh')
                setBangladeshCases(bangladesh);
            })
    }, [])
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h3 className="heading">COVID- 19 Daily updates</h3>
            </div>
            <div>
                <div className="world row">
                    <div className="dataCart col-md-3">
                        <h4>Total Cases</h4>
                        <h4 style={{ fontSize: '2rem' }}>{covidData && covidData[0].cases}</h4>
                    </div>
                    <div className="dataCart col-md-3">
                        <h4>Active Cases</h4>
                        <h4 style={{ fontSize: '2rem' }}>{covidData && covidData[0].active}</h4>
                    </div>
                    <div className="dataCart col-md-3">
                        <h4>Total Death</h4>
                        <h4 style={{ fontSize: '2rem' }}>{covidData && covidData[0].deaths}</h4>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h3 className="bangladeshHeading">Bangladesh Covid Updates</h3>
                </div>
                <div className="world row">
                    <div className="dataCart col-md-3">
                        <h4>Total Active Cases</h4>
                        <h4 style={{ fontSize: '2rem', color: 'rgb(35, 154, 200)' }}>{bangladeshCases && bangladeshCases.active}</h4>
                    </div>
                    <div className="dataCart col-md-3">
                        <h4>Today's Cases</h4>
                        <h4 style={{ fontSize: '2rem', color: 'rgb(35, 154, 200)' }}>{bangladeshCases && bangladeshCases.todayCases}</h4>
                    </div>
                    <div className="dataCart col-md-3">
                        <h4>Today's Deaths</h4>
                        <h4 style={{ fontSize: '2rem', color: 'rgb(35, 154, 200)' }}>{bangladeshCases && bangladeshCases.todayDeaths}</h4>
                    </div>
                </div>
            </div>
            <div>
                {
                    covidData && <Covid19DataTable
                        key={covidData.country}
                        covidData={covidData}
                    >
                    </Covid19DataTable>
                }
            </div>

        </div>
    );
};

export default Covid19;