import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function NavbarLoggedOut(props){

    return (
        <div className="container-fluid nav">
            
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark nav-right">
                <Link className="navbar-brand" to="/home">Investa </Link>
                <div className="nav-wrapper container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="nyse">NYSE  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="news">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="chart">Charts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="order">Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="summary">Summary</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavbarLoggedOut;