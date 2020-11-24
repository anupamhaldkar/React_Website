import React, {Component} from 'react';
import Wrapper from './components/Wrapper';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class App extends Component {
  render(){
    return (
      <Wrapper >
        <Router>
          <Route
           path="/home"
           component={Home}
          />
        </Router>
        </Wrapper>
    )
  }
}

export default App;
