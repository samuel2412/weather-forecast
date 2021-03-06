import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { usePosition } from 'use-position';

import { makeStyles } from '@material-ui/core/styles';


import SearchForm from '../../components/SearchForm/SearchForm';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
}));


const LandingPage = props => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState('');
  const { latitude, longitude } = usePosition();


  useEffect(() => {
    if (latitude !== undefined) {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAoZ_LibsLiGtHAp7wIS-5O9faTMkuO2yI`)
        .then((response) => {
          setSearchInput(response.data.results[0].address_components[3].long_name)
        })
        .catch((error) => {
        })
    }
  }, [latitude, longitude]);

  const searchHandler = (event) => {
    event.preventDefault();
    props.history.push(`/forecast/${searchInput}`)
  }

  return (
    <div className={classes.root}>

      <SearchForm
        onSubmit={searchHandler}
        searchInput={searchInput}
        setSearchInput={setSearchInput} />

    </div >
  );
}

export default LandingPage;
