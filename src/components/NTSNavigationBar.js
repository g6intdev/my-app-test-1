import React, { useState } from "react";
import { browserRouter, Link } from "react-router-dom";

import logo from '../logo.svg';

import "bootstrap/dist/css/bootstrap.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';

function NTSNavigationBar() {

  const [AllowedActions, setAllowedActions] = useState(
    [{
      featurekey: "bordercontrol",
      featurename: "入退場管理",
      linkto: "./bordercontrol"
    }]);

  const listItems = AllowedActions.map(allowedAction =>
    <NavDropdown.Item link={allowedAction.linkto} key={allowedAction.featurekey}>
      {allowedAction.featurename}
    </NavDropdown.Item>
  );

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
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
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <NavDropdown title="ツール" id="basic-nav-dropdown">
            {listItems}
          </NavDropdown>
          <NavDropdown title="Mark Otto" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              アカウント情報
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              ログアウト
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NTSNavigationBar;
