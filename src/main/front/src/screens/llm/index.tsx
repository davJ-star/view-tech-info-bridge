import React, { useState, useEffect } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap' // Import only InputGroup
import axios from 'axios'

const LLMQueryResponse = () => {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/llm-query', { prompt })
      setResponse(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handlePromptChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setPrompt(event.target.value)
  }

  return (
    <div className="container">
      <h1>LLM 질의응답</h1>

      <Form>
        <InputGroup>
          <InputGroup.Text>프롬프트:</InputGroup.Text>
          <Form.Control
            as="textarea"
            rows={5}
            value={prompt}
            onChange={handlePromptChange}
          />
        </InputGroup>

        <Button variant="primary" onClick={handleSubmit}>
          질문하기
        </Button>
      </Form>

      <div className="response-container">
        {response && <pre>{response}</pre>}
      </div>
    </div>
  )
}

export default LLMQueryResponse
