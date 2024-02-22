import React from 'react';
import { Row, Col,Container } from 'react-bootstrap';
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <Container className='d-flex justify-content-center mt-5'>
        <Col xs={12} md={6} className='d-flex flex-column align-items-center gap-5'>
          <Row className='d-flex flex-column gap-2 w-100'>
            <label htmlFor="email">sign up for updates:</label>
            <div className='d-flex justify-content-between gap-2'>
              <input className='w-75' type="email" name='email' placeholder='email address' />
              <button className='btn btn-dark w-25'>submit</button>
            </div>
            <p>by signing up you agree on our <a href="/">terms</a></p>
          </Row>
          <Row>
            <ul className='d-flex justify-content-evenly list-unstyled text-decoration-none gap-5'>
              <li>facebook</li>
              <li>instagram</li>
              <li>X</li>
              <li>TikTok</li>
            </ul>
          </Row>
          <Row>
            <ul className='d-flex justify-content-evenly list-unstyled gap-5'>
              <li><a href="/">contact us</a></li>
              <li><a href="/">faq</a></li>
              <li><a href="/">order tracking</a></li>
              <li><a href="/">rewards</a></li>
            </ul>
          </Row>
          <Row>
            <ul style={{whiteSpace:"nowrap"}} className='d-flex justify-content-evenly list-unstyled gap-5'>
              <li><a href="/">privacy policy</a></li>
              <li><a href="/">terms</a></li>
              <li><a href="/">accessibility</a></li>
              <li><a href="/">set my cookie choices</a></li>
              <li><a href="/">cookie policy</a></li>
            </ul>
            <h6 className='d-flex justify-content-center mb-5' style={{fontSize:"10px"}}>© 2024 coty operations</h6>
          </Row>
        </Col>
      </Container>
    </>
  )
}

export default Footer