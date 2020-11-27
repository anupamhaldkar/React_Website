import React, {Component} from 'react';
import Wrapper from './components/Wrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Form';

class App extends Component {
  render(){
    return (
      <Router>
      <Wrapper>
        
          <Route
          exact={true}  
           path="/"
           component={Home}
          />
          <Route
           path="/about"
           component={About}
           />

           <Route 
           path="/contact"
           component={Contact}
           />
      
        </Wrapper>
        </Router>
    )
  }
}

export default App;
