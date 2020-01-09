import React,{useState} from 'react';
import {Redirect} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const MyModal = props => {
    const classes = useStyles();
    const [shouldRedirect,setShouldRedirect] = useState(false);
    const open = props.show;

    const handleClose = () => {
        setShouldRedirect(true);
        props.clearError();
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        
                            {props.children}
                        
                    </div>
                </Fade>
            </Modal>
            {shouldRedirect ? <Redirect to='/' /> : null}
        </div>
    );
}
export default React.memo(
    MyModal,
    (prevProps,nextProps)=>
        nextProps.show === prevProps.show && 
        nextProps.children === prevProps.children
    );
