import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);

  const fetchBooks = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://openlibrary.org/search.json?q=${input}&limit=10&page=1`)
    if (res) {
      console.log(res.data.docs);
      setResult(res.data.docs)
      setInput('')
    }
    else {
      console.log("Error in fetching Data")
    }
  }

  const addBook = (title,edition_count)=>{
    const existingBooks = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
    const updatedBooks = [...existingBooks, { title, edition_count }];
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  }

  return (
    <div>
      <div className='d-flex'>
  <Container className="d-flex justify-content-center">
    <Form className="mt-5 ">
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Search Your Book:</Form.Label>
        <div className="d-flex">
          <Form.Control type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search..." className="me-2 w-80" />
          <Button variant="primary" onClick={fetchBooks} className="me-2 w-50 ">Search</Button>
          <Button variant="success"  href='/myBooks'>My Bookshelf</Button>
        </div>
      </Form.Group>
    </Form>
  </Container>
</div>



      <Container className="mt-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {result.map((book, index) => (
            <Col key={index}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  
                  <Card.Title>Book Title: </Card.Title>  <div>{book.title}</div>
                  <br />
                  <Card.Text>
                    <div className="d-flex align-items-center">
                      <Card.Title className="me-2">Edition Count:</Card.Title>
                      <div>{book.edition_count}</div>
                    </div>
                  </Card.Text>
                  <Button variant="primary" onClick={()=>addBook(book.title,book.edition_count)}>Add Book</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default HomePage