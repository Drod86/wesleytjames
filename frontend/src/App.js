import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
function App() {
const [authenticating, setAuthenticating] = useState(false); // Can have three values: 2 thruthy values: 'login' or 'register' or the boolean value false
const [authenticated, setAuthenticated] = useState(false); // boolean values true or false

const handleAuthToggle = () => {
  setAuthenticated(!authenticated);
}
const handleLoginToggle = (newState = false) => {
  setAuthenticating(newState);
}

  return (
    <React.Fragment>
      <Header auth={authenticated} onAuth={handleAuthToggle}
      authing={authenticating} onAuthing={handleLoginToggle
      }/>
      <Main auth={authenticated} onAuth={handleAuthToggle} authing={authenticating} onAuthing={handleLoginToggle} />
    </React.Fragment>
  );
}

export default App;
