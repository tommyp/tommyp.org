import React, { Component } from 'react';
import Index from './pages/posts/index';
import About from './pages/posts/about';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';
import SoYouMightveHeard from './pages/posts/1-so-you-mightve-heard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />

          <Route path="/so-you-mightve-heard" exact component={SoYouMightveHeard} />
        </div>
      </Router>
    );
  }
}

export default App;
