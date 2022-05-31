import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Navigation() {
  return (
    <div><Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand > <img
        src="https://www.pngkit.com/png/full/43-433950_medical-malpractice-medical-white-icon-png.png"
        width="30"
        height="30"
        
        alt="React Bootstrap logo"
      />Medic.co</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/News">News</Nav.Link>
      <Nav.Link href="/Statistics">Statistics</Nav.Link>
    </Nav>
    </Container>
  </Navbar></div>
  )
}
