import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './Route'
import Navbar from './components/Nav';
function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Route/>
    </div>
    
  );
}

export default App;
