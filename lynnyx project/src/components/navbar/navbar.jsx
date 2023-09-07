import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion } from "framer-motion";
import {SlSocialInstagram } from "react-icons/sl";
import {SlSocialFacebook } from "react-icons/sl";

import './navbar.css'

function Navbar1() {
  return (
    <>
      <Navbar >
        <Container style={{marginLeft:"4rem", backgroundColor:"white"}}>
          <Nav className="me-auto">
            {/* <motion.li whileHover={{ y: 5 }}
        whileTap={{ scale: 0.9 }} > */}
            <Nav.Link href="#pricing" style={{marginLeft:"0"}}><button id='navbutton'>Book Appointment</button></Nav.Link>
            {/* </motion.li> */}
            <Navbar.Brand href="#home"> <img  className="logo" width="350" alt="Screenshot 2023-09-06 at 8 50 45 PM" src="https://github.com/Henrich77/lynnyx/assets/119962472/006c9e2e-e29f-42bf-b685-f576b44d2c39"></img></Navbar.Brand>
            <Nav.Link href="#home" style={{fontSize:"1.2rem"}}>Services</Nav.Link>
            <Nav.Link href="#features"  style={{fontSize:"1.2rem"}} >Contact</Nav.Link>
            <motion.li whileHover={{ y: 5 }}
        whileTap={{ scale: 0.9 }}>
         <SlSocialInstagram style={{margin:".7rem 0rem 0rem 7rem", fontSize:'1.3rem'}}/>
                </motion.li>
                <motion.li whileHover={{ y: 5 }}
        whileTap={{ scale: 0.9 }}>
         <SlSocialFacebook style={{margin:".7rem 0rem 0rem 1rem", fontSize:'1.3rem'}}/>
                </motion.li>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Navbar1;