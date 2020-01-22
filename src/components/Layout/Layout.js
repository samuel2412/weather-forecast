import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundImage: `linear-gradient(to bottom,${lightBlue[100]},${lightGreen[100]})`,
    },
    content: {
        padding: theme.spacing(2),
        margin: 'auto',
        textAlign: 'center',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        borderRadius: '5px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        width: '80vw',
        height: '80vh',      
    },
}));

const Layout = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
  
                    <div className={classes.content} >
                        {props.children}
                    </div> 

        </div>
    );
}

export default Layout;