import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import Courses from "./courses/Courses";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/courses" component={Courses}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
