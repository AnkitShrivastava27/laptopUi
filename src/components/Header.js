import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../style.css"
import { useDispatch, useSelector } from 'react-redux';
import { remAuth } from './Actions';

const Header = () => {
  const storeReducer = useSelector(state=>state.AuthReducer)
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    localStorage.removeItem('token')
    dispatch(remAuth())
  }
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home"><Link style={{textDecoration: 'none'}} to="/">Home</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about"><Link style={{textDecoration: 'none'}} to="/about">About</Link></Nav.Link>
            <Nav.Link href="#contact"><Link style={{textDecoration: 'none'}} to="/contact">Contact</Link></Nav.Link>
          </Nav>
         <Nav>
            <Nav.Link href="#mycart" className="float-md-end"><Link style={{textDecoration: 'none'}}  to="/cart">MyCart</Link></Nav.Link>
            {storeReducer.length>0 ? <Nav.Link href="#login" ><Link style={{textDecoration: 'none'}} 
            onClick={handleLogout} to="/login">
                LogOut
              </Link></Nav.Link>
            :
            <Nav.Link href="#login" ><Link style={{textDecoration: 'none'}}  to="/login">
                LogIn
              </Link></Nav.Link>
            }
        </Nav>
        </Container>
      </Navbar>
      <br />
      

    </div>
  )
}

export default Header