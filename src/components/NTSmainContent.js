import React from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NTSmyAccount from "./NTSmyAccount";

function NTSmainContent() {
  return (
      <Routes>
        <Route path="myaccount" element={<NTSmyAccount />} />
        <Route path="/bordercontrol" element={<h1>cannot GET "/bordercontrol" </h1>} />
      </Routes>
  );
}

export default NTSmainContent;