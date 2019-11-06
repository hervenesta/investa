import React from 'react';
import './Welcome.css';
import logo from './logoinvesta.png';


function Welcome(){
    return(
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Investa-App</h1>
            </header>
        </div>
    )
}

export default Welcome;