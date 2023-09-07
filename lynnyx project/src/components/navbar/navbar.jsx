import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

function Navbar1() {
  return (
    <>
      <Navbar >
        <Container style={{marginLeft:"4rem", backgroundColor:"white"}}>
          <Nav className="me-auto">
            
            <Nav.Link href="#pricing">Book an appointment</Nav.Link>
            <Navbar.Brand href="#home"> <img  className="logo" width="300vw" alt="Screenshot 2023-09-06 at 8 50 45 PM" src="https://github.com/Henrich77/lynnyx/assets/119962472/006c9e2e-e29f-42bf-b685-f576b44d2c39"></img></Navbar.Brand>
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Navbar1;