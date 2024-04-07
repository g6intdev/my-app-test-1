import {React, useContext} from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route} from "react-router-dom";

import NTSnavigationBar from "./components/NTSnavigationBar";
import NTSmainContent from "./components/NTSmainContent";
import uacContext from "./components/NTSuacContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>cannot GET "/" </h1>} />
      <Route path="/app/*" element={<div><NTSnavigationBar /><NTSmainContent /></div>} />
      </Routes> 
    </BrowserRouter>
  );
};

export default App;