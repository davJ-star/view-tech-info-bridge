// import React, { useState, useEffect, useCallback } from 'react'
// import {
//   Button,
//   Card,
//   Col,
//   Container,
//   Form,
//   InputGroup,
//   FormControl,
//   Row,
// } from 'react-bootstrap'
// import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
// // Import your article data here
// import { articles, dummyData } from '../data/thesis' // Replace with your actual article data

// const HomeScreen = () => {
//   const [prompt, setPrompt] = useState('')
//   const [articlesPerPage, setArticlesPerPage] = useState(3) // Adjust as needed
//   const [currentPage, setCurrentPage] = useState(1)
//   const [filteredArticles, setFilteredArticles] = useState(articles) // All articles initially

//   // Fetch article data once on component mount
//   useEffect(() => {
//     // Replace with your actual API call if needed
//     setFilteredArticles(articles)
//   }, [])

//   const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
//     setCurrentPage(pageNumber)
//   }

//   const handlePromptChange = (event: {
//     target: { value: React.SetStateAction<string> }
//   }) => {
//     setPrompt(event.target.value)
//   }

//   const handleSubmitPrompt = async (event: { preventDefault: () => void }) => {
//     event.preventDefault() // Prevent default form submission behavior
//     // Implement logic to submit the prompt to your LLM API
//     console.log('Submitted prompt:', prompt) // Replace with actual API call
//     setPrompt('') // Clear prompt after submission
//   }

//   return (
//     <Container>
//       <Row className="justify-content-center align-items-center">
//         <Col xs={12}>
//           {/* LLM Prompt Input Section */}
//           <Form onSubmit={handleSubmitPrompt}>
//             <InputGroup className="mb-3">
//               <InputGroup.Text>LLM 프롬프트:</InputGroup.Text>
//               <FormControl
//                 as="textarea"
//                 rows={3}
//                 value={prompt}
//                 onChange={handlePromptChange}
//               />
//               <Button variant="primary" type="submit">
//                 질문하기
//               </Button>
//             </InputGroup>
//           </Form>
//         </Col>
//       </Row>

//       <Row className="justify-content-center align-items-center">
//         <Col xs={12}>
//           {/* Articles Section */}
//           <Row>
//             {filteredArticles
//               .slice(
//                 (currentPage - 1) * articlesPerPage,
//                 currentPage * articlesPerPage
//               )
//               .map((article) => (
//                 <Col xs={4} key={article.id} className="mb-3">
//                   <Card>
//                     <Card.Body>
//                       <Card.Title>{article.title}</Card.Title>
//                       <Card.Text>{article.description}</Card.Text>
//                       <Button
//                         variant="primary"
//                         href={article.url}
//                         target="_blank"
//                       >
//                         더 보기
//                       </Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//           </Row>

//           {/* Pagination Section */}
//           <Row className="mt-3 justify-content-center">
//             <Button
//               variant="outline-secondary"
//               disabled={currentPage === 1}
//               onClick={() => handlePageChange(currentPage - 1)}
//             >
//               <FaCaretLeft />
//             </Button>

//             {[
//               ...Array(Math.ceil(filteredArticles.length / articlesPerPage)),
//             ].map((_, i) => (
//               <Button
//                 key={i + 1}
//                 variant="outline-secondary"
//                 className={currentPage === i + 1 ? 'active' : ''}
//                 onClick={() => handlePageChange(i + 1)}
//               >
//                 {i + 1}
//               </Button>
//             ))}

//             <Button
//               variant="outline-secondary"
//               disabled={
//                 currentPage ===
//                 Math.ceil(filteredArticles.length / articlesPerPage)
//               }
//               onClick={() => handlePageChange(currentPage + 1)}
//             >
//               <FaCaretRight />
//             </Button>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default HomeScreen
import React, { useState, useEffect, useCallback } from 'react'

const ThesisListScreen = () => {
  return <div>ThesisScreen</div>
}

export default ThesisListScreen
