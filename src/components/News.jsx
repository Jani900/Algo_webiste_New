import React, {useEffect,useState} from 'react';
import axios from 'axios'
import NewsItem from './NewsItem'


const log_tag = "News";

const News = () => {

const [articles,setArticles] = useState([]);

useEffect(() =>{
  //const sUrl = process.env.REACT_APP_NEWS_API_URL;
  const { REACT_APP_X_ACCESS_KEY } = process.env;

  
 
  const getArticles = async () => {
    const response = await axios.get(REACT_APP_X_ACCESS_KEY);

    if (response?.data?.status === 'success') {
      let newArticlesArray = [];
      for (let i = 0; i < 5; i++) {
        const rItem = response.data.results[i];
        newArticlesArray.push(rItem);
   
      }
      setArticles(newArticlesArray);

    }
    /*
    console.log(log_tag + ".useEffect--response.data = " + JSON.stringify(response.data, null, 4));
    let newArticlesArray = [];
    for (let i = 0; i<5;i++){
      newArticlesArray[i] = response.data.articles[i]
    }
    console.log(newArticlesArray);
    setArticles(newArticlesArray)
    */
  }
  getArticles()
}, []);
  return (
    <div className="w-full py-10 px-4 h-auto">
      <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold text-white mb-6 md:pl-4 text-center md:text-left  ">
        Latest news on technology
      </h1>
      <div className="w-full">
        <div className="self-center">
          <div className="w-full mx-auto grid grid-cols-1 md:flex md:justify-center">
            <div className=" grid grid-cols-1 gap-4 md:grid-cols-1 lg:flex justify-items-center">
              {articles.map((article, item) => (
                <NewsItem
                  key={item}
                  pusblishedDate={article.pubDate}
                  title={article.title}
                  url={article.link}
                  urlToImage={article.image_url}
                  description={article.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
