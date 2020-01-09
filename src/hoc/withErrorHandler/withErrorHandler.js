import React from 'react';
import MyModal from '../../components/UI/MyModal/MyModal';
import useErrorHandler from '../../hooks/http-error-handler';


const withErrorHandler = (WrappedComponent, axios) =>{
    return props => {
            const[error,errorConfirmedHandler] = useErrorHandler(axios);
        
           
            return(
                <React.Fragment>
                    <MyModal show={error !== null}
                    clearError={errorConfirmedHandler}
                    >
                        {error ? error.message : null}
                    </MyModal>
                    <WrappedComponent {...props}/>
                </React.Fragment>
            );
        }
    

}   
export default withErrorHandler; 