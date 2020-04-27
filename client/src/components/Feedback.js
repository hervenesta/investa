import React from 'react';
import './feedback.css';
import person1 from './img/person-1.jpg';
import person2 from './img/person-2.jpg';

function Feedback(){
    return(
        <div id="testimonials" class="py-3">
            <div className="space"></div>
            <h2 className="l-heading">What People Say</h2>
            <div className="feedback">
                <div className="testimonial">
                    <img src={person1} alt="dorine" ></img>
                    <p>I started 3 months ago with Investa without knowing anything in finane.
                    I highly recommend working with Fix Your Credit Consulting. The team at FYCC 
                    was extremely responsive, well informed and helped me through 
                    my situation. They were able to increase my fico score by 100
                    points and remove all
                    </p>
                </div>
                <div className="testimonial">
                    <img src={person2} alt="Dainelle" ></img>
                    <p>I started 2 months ago with Investa without knowing anything in finane.
                    I highly recommend working with Fix Your Credit Consulting. The team at FYCC 
                    was extremely responsive, well informed and helped me through 
                    my situation. They were able to increase my fico score by 100
                     points and remove all</p>
                </div>
            </div>
        </div>
    )
}

export default Feedback;