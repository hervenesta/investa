import React from 'react';
import './home.css';
import Contact from '../components/Contact';
import Customers from '../components/Customers';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div>
            <header id="showcase">
                <div className="showcase-content">
                    <h1 className="l-heading">
                        Train Yourself And Beat The Market
                    </h1>
                    <p>
                        Our platform aims to train any person interested 
                        in investing in stock markets to get acquainted with trading.
                        We offer you $10,000 to start with.
                    </p>
                    <Link to="about" className="btn">Read More</Link>
                </div>
            </header>
            <Customers />
            <Contact />
        </div>
    )
}

export default Home;