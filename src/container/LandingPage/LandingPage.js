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


const LandingPage = props => {
  const classes = useStyles();
  return (

    <form className={classes.root}>
      <div>
        <TextField
          id="outlined-password-input"
          label="Buscar por Cidade"
          type="text"
          variant="outlined"
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Procurar
</Button>
    </form>
  );
}

export default LandingPage;
