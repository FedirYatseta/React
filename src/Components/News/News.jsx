import React from 'react';
import NewsItem from './NewItem/NewItem';



const News = (props) => {
   
   let state = props.newsPage;
   let newsElements = state.newsData.map(n => <NewsItem name={n.name} text={n.text} imgTitle={n.imgTitle}/>);
return (
    <div >
        <div> 
          {newsElements}
        </div>
    </div>
)
}

export default News;