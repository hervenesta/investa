import React from 'react';
import Feedback from '../components/Feedback';
import Customers from '../components/Customers';
import './about.css';
// import groupPic from './groupPic.jpg';

function About (){
    return(
        <div>
            {/* <div> */}
                <link href="//db.onlinewebfonts.com/c/d8848fd5418ebb2898416ce133745d5d?family=PIXymbolsBabyBlocksW00-Reg" rel="stylesheet" type="text/css"/>
                <link href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap" rel="stylesheet"></link>
                <div id="team">
                    <h1> investa team</h1>
                </div>
            <div id="who">
                <div class="who-img"></div>
                <div class="who-text bg-dark p-2">
                    <h2 class="m-heading"><span class="text-primary">Who</span> We Are</h2>
                    <p>We are passionate about Computer Science and helping people learn.
                    We also share an appreciation for finance. So we built an application 
                    to help students learn about the stock market.We hope you enjoy it!
                    </p>
                    <h3>Our Team</h3>
                    <ul class="list">
                        <li>Hala: Frontend developer</li>
                        <li>Elchin: Frontend developer</li>
                        <li>Herve Tchouamani: Fullstack developer</li>
                        <li>Nosson: Frontend developer</li>
                    </ul>
                </div>
            </div>
            <Customers />
            <Feedback />
        </div>
    )
}

export default About;