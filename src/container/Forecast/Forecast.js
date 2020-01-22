import React, { useState, useEffect } from 'react';

import axios from '../../axios-instance';

import Loading from '../../components/UI/Loading/Loading';
import Weather from '../../components/Weather/Weather';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    content: {
        margin: 'auto',
        width: '100%'
    },
    element: {
        margin: theme.spacing(3),
    }
}));


const Forecast = props => {
    const classes = useStyles();
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


            <Weather className={classes.element} weatherData={weatherData} backHandler={backHandler} />

        )
    }
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                {content}
            </div>
        </div>
    );
}
export default errorHandler(Forecast, axios);