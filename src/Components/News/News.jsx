import React from 'react';
import NewsItem from './NewItem/NewItem';


const News = (props) => {
    let newsElements = props.newsPage.newsData
    .map(news => <NewsItem name={news.name} text={news.text} imgTitle={news.imgTitle}/>);

return (
    <div >
        <div> 
          {newsElements}
        </div>
    </div>
)
}

export default News;