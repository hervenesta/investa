import React from 'react';
import './chart.css';

function ChartHeader(props){
    return(
      <div className="subheader">
        <header style={{marginBottom: 10}}>
          <div>
            <h6 className="header"> {props.title} </h6>
          </div>
      
          <div >
            <h6 > Powered by <a className="link" href="https://www.nyse.com/index">NYSE</a> </h6>
          </div>
        </header>
      </div>
    )
}

export default ChartHeader
