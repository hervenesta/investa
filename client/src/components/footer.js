import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

function Footer(){
    return (
        <div className="footer-bg-dark">
            <div className="container-w">
                <div className="footer-disp-flex">
                    <ul className="menu">
                        <li><Link className="color-white" to="/">Home</Link></li>
                        <li><Link className="color-white" to="/about">About</Link></li>
                        <li><Link className="color-white" to="/nyse">NYSE</Link></li>
                        <li><Link className="color-white" to="news">News</Link></li>
                        <li><Link className="color-white" to="chart">Chart</Link></li>
                        <li><Link className="color-white" to="order">Trade</Link></li>
                        <li><Link className="color-white" to="summary">Summary</Link></li>
                        <li><Link className="color-white" to="login">Login</Link></li>
                        <li><Link className="color-white" to="signup">Sign Up</Link></li>
                    </ul>
                    <ul className="nyse-items">
                        <li><Link className="color-white" to="https://www.nyse.com/quotes">Data</Link></li>
                        <li><Link className="color-white" to="https://www.intercontinentalexchange.com/careers">Careers</Link></li>
                        <li><Link className="color-white" to="https://www.theice.com/marketdata/reports">Reports</Link></li>
                    </ul>
                    <ul className="followus">
                        <li><Link className="color-white" to="">Facebook</Link></li>
                        <li><Link className="color-white" to="">Twitter</Link></li>
                        <li><Link className="color-white" to="">Linkedin</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-line"></div>
            <div className="footer-container">
                <p>Copyright &copy; 2020, Investa, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;