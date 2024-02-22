import React, { useState } from 'react';
import "./Home.css";
import { Navibar } from '../../Common/Common';
import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import Products from "../../Assets/Data/Products";
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
      <Row className='hero' style={{ height: "calc(100vh - 70px)"}}>
        <Col style={{background:"#dadada",zIndex:"-1"}} className='d-flex flex-column justify-content-center ps-5'>
          <div style={{ width: "18rem" }}>
            <h6><b>NEW</b></h6>
            <h4><b>LIP BUTTER</b></h4>
            <br />
            <p>a skincare-rich, vanilla caramel balm that instantly quenches lips in silky moisture for up to 24 hours</p>
            <Button className='center'>shop now</Button>
          </div>
        </Col>
        <Col>
        </Col>
      </Row>
      <Container className='p-5'>
        <Row className='p-5'>
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
      <Row className='p-5 plush'>
        <Col xs={12} md={6} className='ps-5 center'>
          <div style={{ width: "18rem" }}>
            <h6><b>NOW AVAILABLE</b></h6>
            <h4><b>POWER PLUSH LONGWEAR FOUNDATION</b></h4>
            <p>
              a skin-breathable, hydrating, foundation with up to 12 hours of weightless, comfortable wear.
            </p>
            <h6>available in 40 shades.</h6>
            <Button className='btn-light'>shop now</Button>
          </div>
        </Col>
        <Col xs={12} md={6} className='center'>
          <img className='img-fluid' src={second} alt="another featured" />
        </Col>
      </Row>
      <Row>
        <Col className='ps-5 center' xs={12} md={6}>
          <div style={{ width: "18rem" }}>
            <h3><b>KYLIE'S</b></h3>
            <h3><b>TOP FEB FAVES</b></h3>
            <p>shop her go-to makeup & skincare essentials for february.</p>
            <Button>shop now</Button>
          </div>
        </Col>
        <Col className='p-5' xs={12} md={6}>
          <img className='img-fluid' src={third} alt="and another one" />
        </Col>
      </Row>
      <Row className='d-flex justify-content-center align-items-center'>
        <Row className='ps-5 pe-5 d-flex align-items-center flex-nowrap slick' style={{ overflowX: "scroll", height: "550px", width: "100rem" }}>
          {Products.map((items) => (
            <Card key={items.id} className='me-3 p-0' style={{ width: '377px', height: "464px", overflow: "clip" }}>
              <Card.Img variant="top" src={items.pic} />
              <Card.Body className='card-body'>
                <Card.Title>{items.name}</Card.Title>
                <Card.Text>
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
      </Row>
      <Row className='brand ms-5 me-5'>
        <h1 className='center mt-5 mb-5'>SHOP BY BRAND</h1>
        <Col className='center brand-1' xs={12} md={4}><img style={{ width: "100%", height: "auto", borderRadius: "32px" }} src={brand1} alt="brand1" /></Col>
        <Col className='center brand-2' xs={12} md={4}><img style={{ width: "100%", height: "auto", borderRadius: "32px" }} src={brand2} alt="brand2" /></Col>
        <Col className='center brand-3' xs={12} md={4}><img style={{ width: "100%", height: "auto", borderRadius: "32px" }} src={brand3} alt="brand3" /></Col>
        <div className='center mt-5 pt-5'>
          <Button>shop now</Button>
        </div>
      </Row>
      <Row className='center mt-5 mb-5 virtual ms-5 me-5' style={{height:"85vh", backgroundPosition:"center center"}}>
        <div className='d-flex flex-column' style={{width:"18rem"}}>
          <p>VIRTUAL TRY ON</p>
          <div className='center'>
          <Button>discover now</Button>
          </div>
        </div>
      </Row>
      <h1 className='ms-5 mt-5 pt-5'>BEST SELLERS</h1>
      <Row className='d-flex justify-content-center align-items-center'>
        <Row className='ps-5 pe-5 d-flex align-items-center flex-nowrap slick' style={{ overflowX: "scroll", height: "550px", width: "100rem" }}>
          {Products.map((items) => (
            <Card key={items.id} className='me-3 p-0' style={{ width: '377px', height: "464px", overflow: "clip" }}>
              <Card.Img variant="top" src={items.pic} />
              <Card.Body className='card-body'>
                <Card.Title>{items.name}</Card.Title>
                <Card.Text>
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
      </Row>
      <h1 className='center mt-5 mb-5'>SHOP OUR IG</h1>
      <Row className='p-5 mb-5'>
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