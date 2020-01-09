import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    insideDiv: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    outsideDiv: {
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

            <div className={classes.outsideDiv}>
                <Grid item xs={12}>
                    <div className={classes.insideDiv} >
                        {props.children}
                    </div>
                </Grid>
            </div>

        </div>
    );
}

export default Layout;