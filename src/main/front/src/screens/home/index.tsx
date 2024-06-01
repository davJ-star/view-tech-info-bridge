import React, { useState, useEffect, useCallback } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  FormText,
  Row,
} from 'react-bootstrap' // Import necessary components
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { NewsArticle, dummyData } from '../News/NewsArticle' // Import NewsArticle and dummyData

const HomeScreen = () => {
  const [prompt, setPrompt] = useState('')
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

  const handlePromptChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setPrompt(event.target.value)
  }

  const handleSubmitPrompt = async (event: { preventDefault: () => void }) => {
    event.preventDefault() // Prevent default form submission behavior
    // Implement logic to submit the prompt to your LLM API
    console.log('Submitted prompt:', prompt) // Replace with actual API call
    setPrompt('') // Clear prompt after submission
  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
          {/* LLM Prompt Input Section */}
          <Form onSubmit={handleSubmitPrompt}>
            <InputGroup className="mb-3">
              <InputGroup.Text>LLM 프롬프트:</InputGroup.Text>
              <Form.Control // Use Form.Control instead of Input
                as="textarea"
                rows={3}
                value={prompt}
                onChange={handlePromptChange}
              />
              <Button variant="primary" type="submit">
                질문하기
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>

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
          {/* News Carousel Section (unchanged) */}
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
