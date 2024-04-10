import { Container, Form, InputGroup, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Outlet } from 'react-router-dom';

const NavigationBarComponent = () => {
  const [keyword, setKeyword] = useState<string>('');

  // https://velog.io/@minu-j/React-EventListener-%EC%B6%94%EA%B0%80%ED%95%98%EA%B3%A0-%EB%B0%98%EB%93%9C%EC%8B%9C-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0
  // TODO
  // useEffect(() => {}, []);

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary m-auto mt-3"
        style={{ width: '95%', borderRadius: '30px' }}
      >
        <Container>
          <Navbar.Brand href="#home">View Tech Info Bridge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">News</Nav.Link>
              <Nav.Link href="#link">Thesis</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Group>
                <InputGroup>
                  <InputGroup.Text>
                    <IoSearch />
                  </InputGroup.Text>
                  <Form.Control
                    // TODO: animation
                    type="text"
                    placeholder="Trend AI에게 무엇이든 물어보세요"
                    onChange={(event) => setKeyword(event.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavigationBarComponent;
