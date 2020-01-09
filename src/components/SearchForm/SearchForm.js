import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: 200,
        },
    },
}));


const SearchForm = props => {
    const classes = useStyles();



    return (

        <React.Fragment>
            <form className={classes.root} onSubmit={()=>props.onSubmit()}>
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="Buscar por Cidade"
                        type="text"
                        variant="outlined"
                        value={props.searchInput}
                        onChange={ (event) => props.setSearchInput(event.target.value)}
                    />
                </div>
                <Button type="submit" variant="contained" color="primary">
                    Procurar
                </Button>
            </form>
        </React.Fragment>

    );
}

export default SearchForm;
