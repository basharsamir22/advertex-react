import React from 'react';
import Alert from 'react-bootstrap/Alert';
function NotFoundExeption(){
    return(
        <div className='container notfound'>
            {[
                'info',
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                Page NotFound 404 Error !
                </Alert>
            ))}
        </div>
    )
};
export default NotFoundExeption