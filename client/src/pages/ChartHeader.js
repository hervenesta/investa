import React from 'react';
import {NavLink} from 'react-router-dom';

function ChartHeader(props){
    return(
        <header style={{marginBottom: 10}}>
        <div>
          <span className="header"> {props.title} </span>
        </div>
    
        <div className="subheader-body">
          <span className="subheader"> Powered by <a className="link" target="_blank" href="https://www.nyse.com/index">NYSE</a>. </span>
        </div>
      </header>
    )
}

export default ChartHeader
