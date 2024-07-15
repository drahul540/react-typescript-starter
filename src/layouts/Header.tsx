import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setActive } from '../store/navigationSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigation = useSelector( (state: RootState) => state.navigation)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultClass= 'menu-item';
  const activeClass= 'menu-item active';

  const menuClass = (menu: String) => navigation.active === menu? activeClass : defaultClass;

  const handleMenu = (menu: String) => {
    dispatch(setActive(menu));
    menu === 'home'? navigate('/') : navigate(`${menu}`);
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <div className={ menuClass('home') } onClick={() => handleMenu('home') } >Home</div>
            <div className={ menuClass('features') } onClick={() => handleMenu('features')} >Features</div>
            <div className={ menuClass('pricing') } onClick={() => handleMenu('pricing')} >Pricing</div>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header