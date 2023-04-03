import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Navbar from './navbar'
import Carousalpage from './carousal'
import Content1 from './content1';
import Footer from './footer';
import Coursecontent from './coursecontent';
import Pastrecuter from './pastreccuters';
import Guider from '../Recuter/guider';
    function Frontpage() {
      return (
          <>
            < Navbar/>
            < Carousalpage/>
            < Content1/>
            <Coursecontent/>
            <Guider/>
            <Footer/>
          </>
      );
  }
  export default Frontpage


