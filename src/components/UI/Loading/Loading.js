import React from 'react'

import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const Loading = props => {

    return (
        <React.Fragment>
            <Typography  variant="button" >
                {props.query}
            </Typography>
            <LinearProgress variant="query"/>
        </React.Fragment>
    );
}
export default Loading 