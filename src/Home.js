import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/Home.css';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <header>

      </header>
      <body>
      <div className="home-container">
        <div className="home-item home-item-1"></div>

        <div className="home-item home-item-3"></div>

      </div>
      </body>

    </div>
  );
}

export default Home;