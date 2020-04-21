import React from 'react';
import {Link} from 'react-router-dom';
import './Welcome.css';
// import logo from './logoinvesta.png';
// import tree from './tree.png';


function Welcome(){
    return(
        <div>
            <nav id="navbar">
                <h5>
                    <span className="text-primary"><i className="fas fa-hand-holding-usd"> Investa</i></span>
                </h5>
                <ul>
                    <li><Link className="color-white"  to="/">Home</Link></li>
                    <li><Link className="color-white"  to="about">About</Link></li>
                    <li><Link className="color-white"  to="nyse">NYSE</Link></li>
                    <li><Link className="color-white"  to="news">News</Link></li>
                    <li><Link className="color-white"  to="chart">Chart</Link></li>
                    <li><Link className="color-white"  to="order">Trade</Link></li>
                    <li><Link className="color-white"  to="summary">Summary</Link></li>
                    <li><Link className="color-white"  to="login">Login</Link></li>
                    <li><Link className="color-white"  to="signup">Sign Up</Link></li>
                </ul>
            </nav>
        </div>
        // <div className="App">
        //     <header className="App-header">
            
        //     <div className="d-flex justify-content-center">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <h1 className="App-title ">Welcome to <span id="brand">Inv€sta</span></h1>  
        //         <img src={tree} alt="tree" height="120" width="130"></img>
        //     </div>
        //     </header>
        // </div>
    )
}

export default Welcome;