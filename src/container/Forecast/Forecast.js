import React, { useState, useEffect } from 'react';

import axios from '../../axios-instance';

import Loading from '../../components/UI/Loading/Loading';
import Weather from '../../components/Weather/Weather';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const Forecast = props => {
    const query = props.match.params.query;
    const [isLoading, setIsLoading] = useState(true);
    const [weatherData, setWeatherData] = useState('');

    useEffect(() => {
        axios.get(`weather?q=${query}&units=metric&lang=pt_br&APPID=59a3e0cc4e296aed40918ac8d08338a2`)
            .then((response) => {
                    setWeatherData(response.data);
                    setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
            });
    }, [query])

    const backHandler = (event) => {
        event.preventDefault();
        props.history.push('/')
    }


    let content = (
        <Loading query={query} />
    );

    if (!isLoading && weatherData) {
        content = (
            <Weather weatherData={weatherData} backHandler={backHandler} />
        )
    }
    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
}
export default errorHandler(Forecast, axios);