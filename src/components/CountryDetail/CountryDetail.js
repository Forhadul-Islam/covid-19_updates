import React, { useEffect, useState } from 'react';
import './CountryDetail.css';
import Navbar from '../Navbar/Navbar';
import { useParams, useLocation } from 'react-router-dom';
import CountryDetailCurrentStatus from '../CountryDetailCurrentStatus/CountryDetailCurrentStatus';
import CovidDataGraph from '../CovidDataGraph/CovidDataGraph';
import BangladeshCovidCases from '../BangladeshCovidCases/BangladeshCovidCases';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [countryData, setCountryData] = useState(null);
    const [bangladeshDetail, setBangladeshDetail] = useState(null);
    const location = useLocation();

    useEffect(() => {
        fetch('https://corona-bd.herokuapp.com/district')
            .then(res => res.json())
            .then(data => {
                if (location.pathname === "/country/bangladesh" || "/country/Bangladesh") {
                    setBangladeshDetail(data);
                }
            })
    }, [location])

    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries/' + countryName)
            .then(res => res.json())
            .then(data => {
                setCountryData(data);
            })
    }, [countryName])

    useEffect(() => {
        fetch('https://www.accuweather.com/web-api/covid-timeseries?country=' + countryName)
            .then(res => res.json())
            .then(data => {
                console.log(Object.keys(data.ConfirmedDailyData))
            })
    }, [countryName])

    return (
        <div>
            <Navbar></Navbar>
            <CountryDetailCurrentStatus
                countryData={countryData}
            ></CountryDetailCurrentStatus>
            {
                bangladeshDetail && <BangladeshCovidCases
                    key={bangladeshDetail.data.name}
                    bangladeshDetail={bangladeshDetail}
                ></BangladeshCovidCases>
            }
        </div>
    );
};

export default CountryDetail;