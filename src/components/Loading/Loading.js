import React from 'react'

import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const Loading = props => {

    return (
        <React.Fragment>
            <Typography variant="h5">
                {props.searchInput}
            </Typography>
            <LinearProgress variant="query" style={{ width: '80vw' }} />
        </React.Fragment>
    );
}
export default Loading 