import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Home from "./Component/Router"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>


  );
}

export default App;
