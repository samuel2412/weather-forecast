import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    insideDiv: {
        position: 'absolute',
        top: '50vh',
        left: '50vw',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        height: '80vh',
    },
}));

const Layout = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div className={classes.insideDiv}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={3}>
                        {props.children}
                    </Paper>
                </Grid>
            </div>

        </div>
    );
}

export default Layout;