import React from 'react';
import './about.css';
import groupPic from './groupPic.jpg';

function About (){
    return(
        <div>
            <div>
                <link href="//db.onlinewebfonts.com/c/d8848fd5418ebb2898416ce133745d5d?family=PIXymbolsBabyBlocksW00-Reg" rel="stylesheet" type="text/css"/>
                <link href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap" rel="stylesheet"></link>
                <h1 id="team" className="text-center py-2 my-0 h-25 "> investa team</h1>
                <div id="teamP"className=" justify-content-center text-center py-2">
                <img src={groupPic} alt="Smiley face" height="500" width="650"></img>
                <div class="color1">
                <h3 className="py-4">We are the Investa Team!</h3 >
                <div className="h1">Hala, Elchin, Herve and Nosson</div>
                <ul className="mb-5">
                    <li  id="bla" className="h2 border-0 py-3">We are passionate about Computer Science and helping people learn.</li >
                    <li id="bla" className="h2 border-0 py-3">We also share an appreciation for finance. </li >
                    <li id="bla" className="h2 border-0 py-3">So we built an application to help students learn about the stock market.We hope you enjoy it!</li >
                </ul>
                <div ><p className="h1 ">Here's a little background on our team members </p>
                
                </div>
                
                </div>
                </div>
                
            </div>
     </div>
    )
}

export default About;