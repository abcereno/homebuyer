import React from 'react';
import "./Navibar.css";
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';
const Navibar = () => {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary p-0 navibar">
        <Container className='p-0' fluid style={{ maxHeight: "70px", background: "#dadada" }}>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-md-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-md-md`}
            aria-labelledby={`offcanvasNavbarLabel-md-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-md-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-between flex-grow-1 ps-3 pe-3">
                <div className='d-flex justify-content-evenly align-items-center  '>
                  <Nav.Link href="#">kylie cosmetics</Nav.Link>
                  <Nav.Link href="#">kylie skin</Nav.Link>
                  <Nav.Link href="#">kylie baby</Nav.Link>
                  <Nav.Link href="#">discover</Nav.Link>
                  <Nav.Link href="#">rewards</Nav.Link>
                </div>
                <Navbar.Brand className='d-flex flex-column flex-end' href="#home">
                  <p className=' p-0 m-0'>
                  <h6>KYLIE COSMETICS</h6>
                  <h6 className='text-small'>BY KYLIE JENNER</h6>
                  </p>
                </Navbar.Brand>
                <div className='d-flex justify-content-evenly align-items-center'>
                  <Nav.Link href="#">currency</Nav.Link>
                  <Nav.Link href="#">heart</Nav.Link>
                  <Nav.Link href="#">user</Nav.Link>
                  <Nav.Link href="#">search</Nav.Link>
                  <Nav.Link href="#">bag</Nav.Link>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand className='d-lg-none p-0 m-0' href="#home">
                  <p className='p-0 m-0'>
                  <h6>KYLIE COSMETICS</h6>
                  <h6 className='text-small'>BY KYLIE JENNER</h6>
                  </p>
                </Navbar.Brand>
        </Container>
      </Navbar >
    </>
  )
}

export default Navibar