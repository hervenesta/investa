import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar(props){

    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <NavLink className="navbar-brand" to="/">Investa</NavLink>
            <ul className="navbar-nav">
                    <li className="nav-item active">
                    <NavLink className="nav-link" to="home">Home </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="stocks">NYSE  </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="news">News</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="charts">Charts</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="signup">Signup</NavLink>
                    </li>
                </ul>
        </nav>
        </div>
    )
}

export default Navbar;