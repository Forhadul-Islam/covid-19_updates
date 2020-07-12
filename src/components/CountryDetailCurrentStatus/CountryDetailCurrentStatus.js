import React from 'react';
import './CountryDetailCurrentStatus.css';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import CovidDataGraph from '../CovidDataGraph/CovidDataGraph';

const CountryDetailCurrentStatus = (props) => {
    const countryData = props.countryData;
    // const {country, totalTests, cases, active, deaths, recover, critical, todayCases, todayDeaths} = countryData;
    console.log(countryData)
    return (
        <div>
            <div>
                {
                    countryData ? <h2 className="countryName">{countryData.country}</h2>
                        : <Loader
                            className="countryName"
                            type="Rings"
                            color="#15b7d2b8"
                            height={100}
                            width={100}

                        />
                }
            </div>
            <div>
                {
                    countryData && <CovidDataGraph></CovidDataGraph>
                }

            </div>
            <div style={{ display: countryData ? "block" : "none" }}>
                <div className="dataArea row">
                    <div className="countryData col-md-5">
                        <h3>Total Tests</h3>
                        <h4>{countryData && countryData.totalTests}</h4>
                        <h3>Total Cases</h3>
                        <h4>{countryData && countryData.cases}</h4>
                        <h3>Total Recovered</h3>
                        <h4>{countryData && countryData.recovered}</h4>
                        <h3>Total Deaths</h3>
                        <h4>{countryData && countryData.deaths}</h4>
                        <h3>Active Cases</h3>
                        <h4>{countryData && countryData.active}</h4>
                    </div>
                    <div className="countryData col-md-5">
                        <h3>Today's Cases</h3>
                        <h4>{countryData && countryData.todayCases}</h4>
                        <h3>Today's Deaths</h3>
                        <h4>{countryData && countryData.todayDeaths}</h4>
                        <h3>Critical Patients</h3>
                        <h4>{countryData && countryData.critical}</h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetailCurrentStatus;