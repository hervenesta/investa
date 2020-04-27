import React from 'react';
import './customers.css';
import jpm from './img/jpm.png';
import md from './img/mcdonald.png';
import nike from './img/nike.jpg';
import visa from './img/visa.svg';
import fb from './img/facebook.png';


function Customers() {
    return(
        <div>
            <div id="clients" className="py-1">
                {/* <div className="conatiner"> */}
                    <h2 className="m-heading text-center">
                        <span className="text-primary">Our</span>
                         Clients
                    </h2>
                    <div className="items py-1">
                        <div><img src={visa} alt="Client"></img></div>
                        <div><img src={jpm} alt="Client"></img></div>
                        <div><img src={md} alt="Client"></img></div>
                        <div><img src={nike} alt="Client"></img></div>
                        <div><img src={fb} alt="Client"></img></div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Customers;