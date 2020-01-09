import React, { useState } from 'react';
import axios from '../../axios-instance';

import SearchForm from '../../components/SearchForm/SearchForm';
import Loading from '../../components/Loading/Loading';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Forecast from '../../components/Forecast/Forecast';


const LandingPage = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [weatherData, setWeatherData] = useState('');


  const searchHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios.get('weather?q=London,uk&units=metric&APPID=59a3e0cc4e296aed40918ac8d08338a2')
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
    <React.Fragment>
      {isLoading ? <Loading searchInput={searchInput} />
        : <SearchForm
          onSubmit={searchHandler}
          searchInput={searchInput}
          setSearchInput={setSearchInput} />}

    </React.Fragment>
  );

  if (weatherData) {
    content = (
      <Forecast />
    );
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

export default errorHandler(LandingPage, axios);
