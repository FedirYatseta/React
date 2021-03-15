import React from 'react';
import NewsItem from './NewItem/NewItem';



const News = (props) => {
   
   let state = props.newsPage;
   let newsElements = state.newsData.map(n => <NewsItem name={n.name} key={n.id}text={n.text} imgTitle={n.imgTitle}/>);
return (
    <div >
        <div> 
          {newsElements}
        </div>
    </div>
)
}

export default News;