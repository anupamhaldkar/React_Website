import React, {Component} from 'react';
import Wrapper from './components/Wrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import AdminWrapper from './components/AdminWrapper';
class App extends Component {
  render(){
    return (
      <Router>
        <Route
        path="/admin"
        render={props =>(
          <AdminWrapper>
          <Login/>
          </AdminWrapper>
        )}
        />

    
        
          <Route
          exact={true}  
           path="/"
           component={props=>(
             <Wrapper>
               <Home {...props}/>
             </Wrapper>
           )}
          />
          <Route
           path="/about"
           component={props=>(
            <Wrapper>
              <About {...props}/>
            </Wrapper>
          )}
           />

           <Route 
           path="/contact"
           component={props=>(
            <Wrapper>
              <Contact {...props}/>
            </Wrapper>
          )}
           />
      
    
        </Router>
    )
  }
}

export default App;
