import React, { useState } from 'react';
import axios from 'axios';

import SearchForm from '../../components/SearchForm/SearchForm';
import Loading from '../../components/Loading/Loading';

const LandingPage = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const searchHandler = () => {
    setIsLoading(true);
    axios.get('https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')
      .then((response) => {
        console.log(response);
        setIsLoading(false);

      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }



  //<Loading searchInput="São Paulo, BR"/>
  return (
    <React.Fragment>
      {isLoading ? <Loading searchInput={searchInput} />
        : <SearchForm
          onSubmit={searchHandler}
          searchInput={searchInput}
          setSearchInput={setSearchInput} />}

    </React.Fragment>
  );
}

export default LandingPage;
