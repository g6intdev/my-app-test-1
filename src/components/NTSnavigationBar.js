import React, { useContext, useState } from "react";
import { browserRouter, Link } from "react-router-dom";

import logo from '../logo.svg';

import "bootstrap/dist/css/bootstrap.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
import uacContext from "./NTSuacContext";

function NTSnavigationBar() {

  const uacInfo = useContext(uacContext);

  const listItems = uacInfo.allowedActions.map(allowedAction =>
    <NavDropdown.Item as={Link} to={allowedAction.linkto} key={allowedAction.featurekey}>
      {allowedAction.featurename}
    </NavDropdown.Item>
  );

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/app">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          NTSテスト
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">{'　'}
          <NavDropdown title="ツール" id="basic-nav-dropdown">
            {listItems}
          </NavDropdown>{'　'}
          <NavDropdown title={uacInfo.lastName + " "+uacInfo.firstName} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="./myaccount">
              アカウント情報
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/logout">
              ログアウト
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NTSnavigationBar;
