import React, { useState, useEffect, useCallback } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { NewsArticle, dummyData } from '../News/NewsArticle' // Import NewsArticle and dummyData

const HomeScreen = () => {
  const [news, setNews] = useState<NewsArticle[]>(dummyData) // Use dummyData initially
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  // Fetch news data once on component mount
  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    // Replace with your actual API call
    const response = await fetch('/api/news')
    const data = await response.json()
    setNews(data)
  }

  const handleNextNews = useCallback(() => {
    setCurrentIndex((currentIndex + 3) % news.length)
  }, [currentIndex, news.length])

  const handlePrevNews = useCallback(() => {
    setCurrentIndex((currentIndex - 3 + news.length) % news.length)
  }, [currentIndex, news.length])

  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col xs={2}>
          <Button
            variant="outline-secondary"
            onClick={handlePrevNews}
            className="d-block mx-auto"
          >
            <FaCaretLeft />
          </Button>
        </Col>
        <Col xs={8} md={8}>
          <Card>
            <Card.Body>
              <Row>
                {news
                  .slice(currentIndex, currentIndex + 3)
                  .map((article, index) => (
                    <Col xs={4} key={index} className="text-center">
                      <Card.Title>
                        <div
                          dangerouslySetInnerHTML={{ __html: article.title }}
                        />
                      </Card.Title>
                      <Card.Body>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: article.description,
                          }}
                        />
                      </Card.Body>
                    </Col>
                  ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Button
            variant="outline-secondary"
            onClick={handleNextNews}
            className="d-block mx-auto"
          >
            <FaCaretRight />
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen
