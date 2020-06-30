import React, { useEffect, useState } from 'react';
import './CountryDetail.css';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import CountryDetailCurrentStatus from '../CountryDetailCurrentStatus/CountryDetailCurrentStatus';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries/' + countryName)
            .then(res => res.json())
            .then(data => {
                setCountryData(data);
                console.log(data);
            })
    }, [countryName])

    useEffect(() => {
        fetch('https://www.accuweather.com/web-api/covid-timeseries?country=' + countryName)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [countryName])

    return (
        <div>
            <Navbar></Navbar>
            <CountryDetailCurrentStatus
                countryData={countryData}
            ></CountryDetailCurrentStatus>

        </div>
    );
};

export default CountryDetail;