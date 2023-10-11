import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = props => {
  return (
    <header className="header">
      <h2 className="logo-text">W.T.J <span className="sub">FIT</span></h2>
      <Nav auth={props.auth} 
      onAuth={props.onAuth} 
      authing={props.authing} onAuthing={props.onAuthing}/>
    </header>
  );
};

export default Header;
