import React, {Component} from 'react';
import Wrapper from './components/Wrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
class App extends Component {
  render(){
    return (
      <Router>
      <Wrapper>
        
          <Route
          exact={true}
           path="/home"
           component={Home}
          />
          <Route
           path="/About"
           component={About}
           />
      
        </Wrapper>
        </Router>
    )
  }
}

export default App;
