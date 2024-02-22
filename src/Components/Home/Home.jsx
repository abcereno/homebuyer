import React, { useState } from 'react';
import "./Home.css";
import { Navibar } from '../../Common/Common';
import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import Products from "../../Assets/Data/Products";
import hero from "../../Assets/Images/hero.png";
import featured from "../../Assets/Images/first.png";
import second from "../../Assets/Images/second.png";
import third from "../../Assets/Images/third.png";
import brand1 from "../../Assets/Images/brand1.png";
import brand2 from "../../Assets/Images/brand2.png";
import brand3 from "../../Assets/Images/brand3.png";

const Home = () => {
  const [counter, setCounter] = useState(1);

  const handleIncreaseQuantity = () => {
    setCounter(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (counter > 1) {
      setCounter(prev => prev - 1);
    }
  };
  return (
    <>
      <Navibar />
      <Row style={{ height: "calc(100vh - 70px)", background: "#dadada" }}>
        <Col>
          <div>
            <h6><b>NEW</b></h6>
            <h4><b>LIP BUTTER</b></h4>
            <br />
            <h6>a skincare-rich, vanilla caramel balm</h6>
            <h6>that instantly quenches lips in</h6>
            <h6>silky moisture for up to 24 hours</h6>
          </div>
          <Button>shop now</Button>
        </Col>
        <Col className='p-0'>
          <img className='img-fluid' src={hero} alt="lipstick" />
        </Col>
      </Row>
      <Container>
        <Row className='p-3 no-gutter-x '>
          <Col xs={12} md={6} className='d-flex justify-content-center'>
            <img className='img-fluid' src={featured} alt='featured product' />
          </Col>
          <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
            <p className='p-5'>
              <h5><b>NATIONAL LASH DAY EXCLUSIVE</b></h5>
              <h2>FREE MINI KYLASH VOLUME MASCARA</h2>
              <h6>celebrate national lash day! get the travel-friendly size of our best-selling mascara free with your order.*</h6>
              <p style={{ fontSize: "10px" }}>*free with any $40+ order. select gift in cart. ends feb. 20.</p>
            </p>
          </Col>
        </Row>
      </Container>
      <Row >
        <Col xs={12} md={6} className='ps-5'>
          <h6><b>NOW AVAILABLE</b></h6>
          <h4><b>POWER PLUSH</b></h4>
          <h4><b>LONGWEAR</b></h4>
          <h4><b>FOUNDATION</b></h4>
          <br />
          <h6>a skin-breathable, hydrating</h6>
          <h6>foundation with up to 12 hours of</h6>
          <h6>weightless, comfortable wear.</h6>
          <br />
          <h6>available in 40 shades.</h6>
          <Button>shop now</Button>
        </Col>
        <Col xs={12} md={6}>
          <img className='img-fluid' src={second} alt="another featured" />
        </Col>
      </Row>
      <Row >
        <Col className='ps-5' xs={12} md={6}>
          <div>
            <h3><b>KYLIE'S</b></h3>
            <h3><b>TOP FEB FAVES</b></h3>
            <h6>shop her go-to makeup</h6>
            <h6>& skincare essentials for february.</h6>
          </div>
          <Button>shop now</Button>
        </Col>
        <Col xs={12} md={6}>
          <img src={third} alt="and another one" />
        </Col>
      </Row>
      <Row className='ps-5 pe-5 d-flex align-items-center flex-nowrap' style={{ overflowX: "scroll", height: "550px" }}>
        {Products.map((items) => (
          <Card key={items.id} className='me-3 p-0' style={{ width: '377px', height: "464px", overflow: "clip" }}>
            <Card.Img variant="top" src={items.pic} />
            <Card.Body className='card-body'>
              <Card.Title>{items.name}</Card.Title>
              <Card.Text className='mb-5'>
                {items.description}
              </Card.Text>
              <div className='d-flex justify-content-evenly'>
                <div className="d-flex">
                  <button className="btn btn-outline-secondary" onClick={handleDecreaseQuantity}>-</button>
                  <span className="mx-2 d-flex align-items-center">{counter}</span>
                  <button className="btn btn-outline-secondary" onClick={handleIncreaseQuantity}>+</button>
                </div>
                <Button variant="dark">add to cart - {items.price}</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <Row>
        <Col xs={12} md={4}><img className='img-fluid' src={brand1} alt="brand1" /></Col>
        <Col xs={12} md={4}><img className='img-fluid' src={brand2} alt="brand2" /></Col>
        <Col xs={12} md={4}><img className='img-fluid' src={brand3} alt="brand3" /></Col>
      </Row>
      <Row className='ps-5 pe-5 d-flex align-items-center flex-nowrap' style={{ overflowX: "scroll", height: "550px" }}>
        {Products.map((items) => (
          <Card key={items.id} className='me-3 p-0' style={{ width: '377px', height: "464px", overflow: "clip" }}>
            <Card.Img variant="top" src={items.pic} />
            <Card.Body className='card-body'>
              <Card.Title>{items.name}</Card.Title>
              <Card.Text className='mb-5'>
                {items.description}
              </Card.Text>
              <div className='d-flex justify-content-evenly'>
                <div className="d-flex">
                  <button className="btn btn-outline-secondary" onClick={handleDecreaseQuantity}>-</button>
                  <span className="mx-2 d-flex align-items-center">{counter}</span>
                  <button className="btn btn-outline-secondary" onClick={handleIncreaseQuantity}>+</button>
                </div>
                <Button variant="dark">add to cart - {items.price}</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <Row>
        <Col xs={12} md={9}>
          <div className="grid">
            <img className='grid-child' src={brand2} alt="dsa" />
            <img className='grid-child' src={brand2} alt="kj" />
            <img className='grid-child' src={brand2} alt="ljh" />
            <img className='grid-child' src={brand2} alt="lkjh" />
            <img className='grid-child' src={brand2} alt="jgf" />
            <img className='grid-child' src={brand2} alt="gfd" />
          </div>
        </Col>
        <Col xs={12} md={3}>
          <img className='grid-child' src={brand1} alt="ddsfd" />
        </Col>
      </Row>
    </>
  )
}

export default Home