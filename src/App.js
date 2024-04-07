import React from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NTSnavigationBar from "./components/NTSnavigationBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>cannot GET "/" </h1>} />
      <Route path="/app/*" element={<NTSnavigationBar />} />
      </Routes> 
    </Router>
  );
};

export default App;