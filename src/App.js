import React, { Component } from "react";
import Index from "./pages/index";
import Info from "./pages/info";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import SoYouMightVeHeard from "./pages/posts/1-so-you-might-ve-heard";
import TheReasonLaNoireChangesEverything from "./pages/posts/2-the-reason-la-noire-changes-everything";
import TeachingTheWeb from "./pages/posts/3-teaching-the-web";
import Build2011 from "./pages/posts/4-build-2011";
import TheEntireHistoryOfEveryone from "./pages/posts/5-the-entire-history-of-everyone";
import TheMediumAndTheMessage from "./pages/posts/6-the-medium-and-the-message";
import MovingOn from "./pages/posts/7-moving-on";
import JuniorDeveloper from "./pages/posts/8-junior-developer";
import Firebreak from "./pages/posts/9-firebreak";
import BeMoreStupid from "./pages/posts/10-be-more-stupid";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Tommy Palmer - A Software Engineer living in London</title>
        </Helmet>
        <Router>
          <div>
            <Route path="/" exact component={Index} />
            <Route path="/info/" component={Info} />

            <Route path="/be-more-stupid" exact component={BeMoreStupid} />
            <Route path="/firebreak" exact component={Firebreak} />
            <Route path="/junior-developer" exact component={JuniorDeveloper} />
            <Route path="/moving-on" exact component={MovingOn} />
            <Route
              path="/the-medium-and-the-message"
              exact
              component={TheMediumAndTheMessage}
            />
            <Route
              path="/the-entire-history-of-everyone"
              exact
              component={TheEntireHistoryOfEveryone}
            />
            <Route path="/build-2011" exact component={Build2011} />
            <Route path="/teaching-the-web" exact component={TeachingTheWeb} />
            <Route
              path="/the-reason-la-noire-changes-everything"
              exact
              component={TheReasonLaNoireChangesEverything}
            />
            <Route
              path="/so-you-might-ve-heard"
              exact
              component={SoYouMightVeHeard}
            />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
