import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="jumbotron">
    <h1>My Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default Home;
