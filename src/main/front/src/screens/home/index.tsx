import React, { useState, useEffect, useCallback } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  FormControl, // Use FormControl instead of FormText
  Row,
} from 'react-bootstrap';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { NewsArticle, dummyData } from '../data/NewsArticle'; // Import NewsArticle and dummyData

const MAX_IMAGE_WIDTH = 300; // Adjust as needed for desired image width

const HomeScreen = () => {
  const [prompt, setPrompt] = useState('');
  const [news, setNews] = useState<NewsArticle[]>(dummyData); // Use dummyData initially
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Fetch news data once on component mount
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    // Replace with your actual API call
    const response = await fetch('/api/news');
    const data = await response.json();
    setNews(data);
  };

  const handleNextNews = useCallback(() => {
    setCurrentIndex((currentIndex + 3) % news.length);
  }, [currentIndex, news.length]);

  const handlePrevNews = useCallback(() => {
    setCurrentIndex((currentIndex - 3 + news.length) % news.length);
  }, [currentIndex, news.length]);

  const handlePromptChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
  };

  const handleSubmitPrompt = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Implement logic to submit the prompt to your LLM API
    console.log('Submitted prompt:', prompt); // Replace with actual API call
    setPrompt(''); // Clear prompt after submission
  };

  return (
    <Container>
      {/* News Carousel Section */}
      <Row className="justify-content-center align-items-center" style={{ margin: '10px' }}>
        <Col xs={2}>
          <Button variant="outline-secondary" onClick={handlePrevNews} className="d-block mx-auto">
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
                    <Col xs={4} key={index} className="text-center mb-3">
                      <Card>
                        <Card.Img
                          variant="top"
                          src={article.imageUrl || 'https://placehold.co/300x200'} // Default image if no imageUrl provided
                          style={{ maxWidth: MAX_IMAGE_WIDTH, height: 'auto' }} // Maintain aspect ratio
                        />
                        <Card.Body>
                          <Card.Title>{article.title}</Card.Title>
                          <Card.Text>{article.description}</Card.Text>
                          <Button variant="primary" href={article.url} target="_blank">
                            더 보기
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Button variant="outline-secondary" onClick={handleNextNews} className="d-block mx-auto">
            <FaCaretRight />
          </Button>
        </Col>
      </Row>

      {/* LLM Prompt Input Section */}
      <Row className="justify-content-center align-items-center" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', padding: '15px' }}>
        <Col xs={12}>
          <Form onSubmit={handleSubmitPrompt}>
            <InputGroup className="mb-3">
              <FormControl // Use FormControl instead of Input
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
    </Container>
  )
}

export default HomeScreen