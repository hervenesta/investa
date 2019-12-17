import React from 'react';
import './Welcome.css';
import logo from './logoinvesta.png';
import tree from './tree.png';


function Welcome(){
    return(
        <div className="App">
            <header className="App-header">
            
            <div className="d-flex justify-content-center">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title ">Welcome to <span id="brand">Inv€sta</span></h1>  
                <img src={tree} alt="tree" height="120" width="130"></img>
            </div>
            </header>
        </div>
    )
}

export default Welcome;