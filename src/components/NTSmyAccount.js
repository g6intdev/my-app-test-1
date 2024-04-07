import {React, useContext} from "react";
import ReactDOM from 'react-dom';

import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import uacContext from "./NTSuacContext";


function NTSmyAccount() {

  const uacInfo = useContext(uacContext);

  return (
    <Container>
      <h1>アカウント情報</h1>
      <a>{JSON.stringify(uacInfo)}</a>

    </Container>
  );
}

export default NTSmyAccount;