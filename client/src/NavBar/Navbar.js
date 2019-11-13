import React from 'react';
import {NavLink} from 'react-router-dom';

function NavbarLoggedOut(props){

    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <NavLink className="navbar-brand" to="/">Investa</NavLink>
            <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link tab disabled" to="home">Home </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link tab disabled" to="stocks">NYSE  </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link tab disabled" to="about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link tab disabled" to="news">News</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link tab disabled" to="charts">Charts</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" to="login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="signup">Signup</NavLink>
                    </li>
                </ul>
        </nav>
        </div>
    )
}

export default NavbarLoggedOut;