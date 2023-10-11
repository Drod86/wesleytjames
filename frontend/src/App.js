import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
function App() {
const [authenticating, setAuthenticating] = useState(false);
const [authenticated, setAuthenticated] = useState(false);

  return (
    <React.Fragment>
      <Header auth={authenticated}
      onAuth={() => setAuthenticated(!authenticated)}
      authing={authenticating} onAuthing={() => setAuthenticating(!authenticating)}/>
      <Main auth={authenticated} onAuth={() => setAuthenticated(!authenticated)} authing={authenticating} onAuthing={() => setAuthenticating(!authenticating)} />
    </React.Fragment>
  );
}

export default App;
