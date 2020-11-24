import React, {Component} from 'react';
import Wrapper from './components/Wrapper';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class App extends Component {
  render(){
    return (
      <Router>
      <Wrapper>
        
          <Route
           path="/"
           component={Home}
          />
      
        </Wrapper>
        </Router>
    )
  }
}

export default App;
