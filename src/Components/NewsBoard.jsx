import { useState } from "react"
import {useEffect} from "react"
import NewsItem from "./NewsItem";
const NewsBoard = ({category}) => {

  const [Articles, setArticles] = useState([]);

 useEffect(() => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${import.meta.env.VITE_NEWS_API_KEY}` ;  
       fetch(url).then((response)=>response.json()).then(data=> setArticles(data.articles))
    },[category]);

  return (
    <div>
      <h2 className="text-center">Latest<span className="badge text-danger fs-3">News</span></h2>
      {
        Articles.filter(article => article.urlToImage).map((article, index) => {
          return <NewsItem key={index} title={article.title} description={article.description} src={article.urlToImage} url={article.url} />
        })
      }
    </div>
  )
}

export default NewsBoard