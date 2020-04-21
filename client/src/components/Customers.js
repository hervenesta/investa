import React from 'react';
import './customers.css';
import ms from './img/microsoft.png';
import md from './img/mcdonald.png';
import gg from './img/google.png';
import fb from './img/facebook.png';

function Customers() {
    return(
        <div>
            <div id="clients" className="py-1">
                <div className="conatiner">
                    <h2 className="m-heading text-center">
                        <span className="text-primary">Our</span>
                         Clients
                    </h2>
                    <div className="items py-1">
                        <div><img src={fb} alt="Client"></img></div>
                        <div><img src={ms} alt="Client"></img></div>
                        <div><img src={md} alt="Client"></img></div>
                        <div><img src={gg} alt="Client"></img></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers;