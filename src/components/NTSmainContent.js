import React from "react";
import ReactDOM from 'react-dom';

import { Routes, Route } from "react-router-dom";

import NTSappHome from "./NTAappHome";
import NTSmyAccount from "./NTSmyAccount";

function NTSmainContent() {
  return (
    <Routes>
      <Route path="/" element={<NTSappHome />} />
      <Route path="/myaccount" element={<NTSmyAccount />} />
      <Route path="/bordercontrol" element={<h1>cannot GET "/bordercontrol" </h1>} />
    </Routes>
  );
}

export default NTSmainContent;