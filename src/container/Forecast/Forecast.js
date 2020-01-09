import React, { useState } from 'react';
import axios from '../../axios-instance';
//import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';

import Loading from '../../components/Loading/Loading';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const Forecast = props => {
    const query = props.match.params.query;
    const [isLoading, setIsLoading] = useState(true);
    const [weatherData, setWeatherData] = useState('');


    const searchHandler = () => {
        axios.get(`weather?q=${query}&units=metric&APPID=59a3e0cc4e296aed40918ac8d08338a2`)
            .then((response) => {
                console.log(response.data);
                setWeatherData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }

    let content = (
        <Loading />
    );

    if (!isLoading) {
        content = (
            <div>
                {weatherData}
            </div>
        )
    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
}
export default errorHandler(Forecast, axios);