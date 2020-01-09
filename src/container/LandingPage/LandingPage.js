import React, { useState } from 'react';

import SearchForm from '../../components/SearchForm/SearchForm';

const LandingPage = props => {
  const [searchInput, setSearchInput] = useState('');

  const searchHandler = (event) => {
    event.preventDefault();
    props.history.push(`/forecast/${searchInput}`)
  }

  return (
    <React.Fragment>
      <SearchForm
        onSubmit={searchHandler}
        searchInput={searchInput}
        setSearchInput={setSearchInput} />
    </React.Fragment>
  );
}

export default LandingPage;
