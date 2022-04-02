import React from 'react';
import './App.css';
import { LogIn } from './Components/LogIn';
import { Navbar } from './Components/Navbar';
import TokenData from './Components/TokenData';
import { AuthContext } from './Contexts/AuthContext';

function App() {
  const {isAuth}=React.useContext(AuthContext)
  return (
    <div className="App">
      <Navbar />
      {
        isAuth ?
        <TokenData /> :
      <LogIn />
      }
    </div>
  );
}

export default App;