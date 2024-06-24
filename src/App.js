// App.js

import React from 'react';
import './App.css'; // Optional global CSS
import Login from './login';


function App() {
  return (
    <div className="App" style={{minHeight:'100vh'}}>
      <h2>Report Management System</h2>
      <Login />
    </div>
  );
}

export default App;
