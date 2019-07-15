import React, { Component } from 'react';
import Index from './pages/posts/index';
import About from './pages/posts/about';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import {Helmet} from "react-helmet"
import SoYouMightveHeard from './pages/posts/1-so-you-mightve-heard';
import TheReasonLaNoireChangesEverything from './pages/posts/2-the-reason-la-noire-changes-everything';

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
            <Route path="/about/" component={About} />

            <Route path="/the-reason-la-noire-changes-everything" exact component={TheReasonLaNoireChangesEverything} />
            <Route path="/so-you-mightve-heard" exact component={SoYouMightveHeard} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
