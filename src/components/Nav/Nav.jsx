import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import HeaderLink from "./HeaderLink/HeaderLink";

import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";

function Navigation() {
  return (
    <div className="nav-wrapper fixed-top  navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">
            <img src={logo} alt="" />
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">         
            <HeaderLink linkUrl='mac' linkName='mac'/>
            <HeaderLink linkUrl='iphone' linkName='iphone'/>
            <HeaderLink linkUrl='ipad' linkName='ipad'/>
            <HeaderLink linkUrl='watch' linkName='watch'/>
            <HeaderLink linkUrl='tv' linkName='tv'/>
            <HeaderLink linkUrl='music' linkName='music'/>
            <HeaderLink linkUrl='support' linkName='support'/>
              <Nav.Link href="/search">
                <img src={search} alt="" />
              </Nav.Link>
              <Nav.Link href="/cart">
                <img src={cart} alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
