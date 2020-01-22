import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    content: {
        margin: 'auto',
    },
    element: {
        margin: theme.spacing(3),
    }
}));


const SearchForm = props => {
    const classes = useStyles();

    return (

        <div className={classes.root}>

            <div className={classes.content}>
                <form onSubmit={(event) => props.onSubmit(event)}>
                    <div className={classes.element}>

                        <TextField
                            id="outlined-input"
                            label="Cidade"
                            type="text"
                            variant="outlined"
                            value={props.searchInput}
                            onChange={(event) => props.setSearchInput(event.target.value)}
                        />
                    </div>
                    <div className={classes.element}>
                        <Button type="submit" variant="contained" color="primary" disabled={props.searchInput === ''}>
                            <SearchIcon />
                            Procurar
                </Button>
                    </div>
                </form>
            </div>
        </div >

    );
}

export default SearchForm;
