import React from 'react';
import './about.css';
import groupPic from './groupPic.jpg';

function About(){
    return(

            <div className="container1">
                <div className="row">
                <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                    <img src={groupPic} alt="gp"/>
                    <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                    </div>
                </div>
                </div>
            </div>
        <div className="container2">
                <div className="row">
                <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                    <img src={groupPic} alt="gp"/>
                    <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="container3">
                <div className="row">
                <div className="col s3 m2">
                <div className="card">
                    <div className="card-image">
                    <img src={groupPic} alt="gp"/>
                    <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="container4">
                <div className="row">
                <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                    <img src={groupPic} alt="gp"/>
                    <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div> 
       
    )
}

export default About;