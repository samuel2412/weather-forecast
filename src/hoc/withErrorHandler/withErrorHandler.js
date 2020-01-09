import React from 'react';

import MyModal from '../../components/UI/MyModal/MyModal';
import useErrorHandler from '../../hooks/http-error-handler';


const withErrorHandler = (WrappedComponent, axios) =>{
    return props => {
            const[error,errorConfirmedHandler] = useErrorHandler(axios);
            
        const message = (
            <React.Fragment>
                <p>Não foi possível carregar as informações.</p>
                <p>Verifique sua conexão com a internet.</p>
                <p>Verifique o nome da cidade buscada.</p>
            </React.Fragment>
        );
           
            return(
                <React.Fragment>
                    <MyModal show={error !== null}
                    clearError={errorConfirmedHandler}
                    >
                        {error ? message
                         : null}
                    </MyModal>
                    <WrappedComponent {...props}/>
                </React.Fragment>
            );
        }
    

}   
export default withErrorHandler; 