import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Wrapper extends Component {
    render(){
        return (
            <div>
           <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div className="container">
      <Link className="navbar-brand" to="/">Start Bootstrap</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Log In</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

        {this.props.children}
  </div>
        )
        }
}
export default Wrapper;