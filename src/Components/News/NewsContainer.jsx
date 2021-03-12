import React from 'react';
import StoreContext from './../../StoreContext';
import News from './../../Components/News/News'

const NewsContainer = () => {
    
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().newsPage;
                    return  (
                    <News newsPage={state} />
                    )
                }
            } 
        </StoreContext.Consumer>
    )
}

export default NewsContainer;