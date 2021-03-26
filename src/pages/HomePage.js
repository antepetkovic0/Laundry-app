import React, { useState, useEffect, useCallback } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  const [prevScroll, setPrevScroll] = useState(0);
  const [navSlide, setNavSlide] = useState(0);

  // const handleScroll = useCallback(
  //   e => {
  //     //research getBoundingClientRect vs window.scrollY
  //     const currentScroll = window.scrollY;

  //     //2 more cases
  //     if (currentScroll > prevScroll) {
  //       setNavSlide(-10);
  //     } else {
  //       setNavSlide(0);
  //     }

  //     setPrevScroll(currentScroll);
  //     console.log('again');
  //   }, [navSlide]
  // );
  const handleScroll = e => {
    //research getBoundingClientRect vs window.scrollY
    const currentScroll = window.scrollY;

    //2 more cases
    if (currentScroll > prevScroll) {
      setNavSlide(-10);
    } else {
      setNavSlide(0);
    }

    setPrevScroll(currentScroll);
    console.log('again');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll]);

  

  return (
    <div>
      <NavBar navPos={navSlide} />
      <div style={{height: "1000px", marginTop: "20rem"}}>dsada
        <span style={{color: "white"}}>sdasssssssssssss</span>
      </div>
      <Footer />
    </div>
  )
};

export default HomePage;