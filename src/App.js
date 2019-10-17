import React from 'react';
import Nav from "./Components/NavBar"
import Tours from "./Components/Tours"
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <main className="main"> 
        <Tours/> 
        </main>
    </div> 
  );
}

export default App;
