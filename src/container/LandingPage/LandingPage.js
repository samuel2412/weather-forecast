import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';

import SearchForm from '../../components/SearchForm/SearchForm';

const LandingPage = props => {
  const [searchInput, setSearchInput] = useState('');

  const searchHandler = (event) => {
    event.preventDefault();
    props.history.push(`/forecast/${searchInput}`)
  }

  return (
    <React.Fragment>
      <Paper style={{padding: '20px'}}>
      <SearchForm
        onSubmit={searchHandler}
        searchInput={searchInput}
        setSearchInput={setSearchInput} />
        </Paper>
    </React.Fragment>
  );
}

export default LandingPage;
