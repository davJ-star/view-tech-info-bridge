import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

function NaverNewsScreen() {
  const [keyword, setKeyword] = useState('')
  const [news, setNews] = useState<NewsArticle[]>([]) // Use NewsArticle type

  interface NewsArticle {
    title: string
    description: string
    link: string
  }

  const dummyData: NewsArticle[] = [
    {
      title: '제목1',
      description: '설명1',
      link: 'https://www.example1.com',
    },
    {
      title: '제목2',
      description: '설명2',
      link: 'https://www.example2.com',
    },
    {
      title: '제목3',
      description: '설명3',
      link: 'https://www.example3.com',
    },
  ]

  const onClickGetNews = useCallback(() => {
    // Replace with your actual backend API URL
    axios.get(`/api/getnews/${keyword}`).then((res) => setNews(res.data))

    // Uncomment the following line to use dummy data instead of API call
    setNews(dummyData)
  }, [keyword])

  useEffect(() => {
    // Fetch initial news data
    onClickGetNews()
  }, [keyword])

  return (
    <div className="App">
      <input
        type="text"
        placeholder="키워드"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button onClick={onClickGetNews}>뉴스 검색</button>
      <ul>
        {news.map((article) => (
          <li key={article.link}>
            <a href={article.link} target="_blank" rel="noreferrer">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NaverNewsScreen
