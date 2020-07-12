import React, { useState } from 'react';
import { useEffect } from 'react';
import './Covid19.css';
import Covid19DataTable from './Covid19DataTable';
import Navbar from '../Navbar/Navbar';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from 'react-router-dom';





const Covid19 = () => {
    const [covidData, setCovidData] = useState(null);
    const [bangladeshCases, setBangladeshCases] = useState(null);
    const [world, setWorld] = useState(null);
    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(data => {
                setCovidData(data);
                const bangladesh = data.find(data => data.country.toLowerCase() === 'bangladesh');
                const worldCases = data.find(data => data.country.toLowerCase() === 'world');
                setBangladeshCases(bangladesh);
                setWorld(worldCases);
            })
    }, [])

    const loading = () => {
        return <Loader
            type="Bars"
            color="#15b7d2b8"
            height={30}
            width={30}

        />
    }
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h3 className="heading">COVID-19 in World</h3>
            </div>
            <div>
                <div className="world row">
                    <div className="dataCart col-md-3">
                        <h4>Total Cases</h4>
                        {
                            world ?
                                <h4 style={{ fontSize: '2rem' }}>{world.cases}</h4>

                                : loading()
                        }
                    </div>
                    <div className="dataCart col-md-3">
                        <h4>Today's Cases</h4>
                        {
                            world ? <h4 style={{ fontSize: '2rem' }}>{world.todayCases}</h4>
                                : loading()
                        }
                    </div>
                    <div className="dataCart col-md-3">
                        <h4>Today's Deaths</h4>
                        {
                            world ? <h4 style={{ fontSize: '2rem' }}>{world.todayDeaths}</h4>
                                : loading()
                        }
                    </div>
                </div>
            </div>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link style={{ textDecoration: 'none' }} to='/country/Bangladesh'>
                        <h3 className="bangladeshHeading">COVID-19 in Bangladesh</h3>
                    </Link>
                </div>
                <div className="world row">
                    <div className="dataCart col-md-3">
                        <h4>Total Active Cases</h4>
                        {
                            bangladeshCases ? <h4 style={{ fontSize: '2rem', color: 'rgb(35, 154, 200)' }}>{bangladeshCases.active}</h4>
                                : loading()
                        }
                    </div>
                    <div className="dataCart col-md-3">
                        <h4>Today's Cases</h4>
                        {
                            bangladeshCases ? <h4 style={{ fontSize: '2rem', color: 'rgb(35, 154, 200)' }}>{bangladeshCases.todayCases}</h4>
                                : loading()
                        }
                    </div>
                    <div className="dataCart col-md-3">
                        <h4>Today's Deaths</h4>
                        {
                            bangladeshCases ? <h4 style={{ fontSize: '2rem', color: 'rgb(35, 154, 200)' }}>{bangladeshCases.todayDeaths}</h4>
                                : loading()
                        }
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