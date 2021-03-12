import React from 'react';
import NewsItem from './NewItem/NewItem';


const NewsContainer = (props) => {

    let state = props.store.getState().newsPage;
    

return <News newsPage={state} />
}

export default NewsContainer;