import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

const MyBooks = () => {
    const [result, setResult] = useState([]);

    const fetchMyBooks = ()=>{
        const books = localStorage.getItem("books")
        console.log(JSON.parse(books))
        setResult(JSON.parse(books))
    }
    useEffect(() => {
      fetchMyBooks()
    }, [])
    
  return (
    <div>
        <h1 className="display-5 d-flex justify-content-center">My Bookshelf</h1>

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
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MyBooks