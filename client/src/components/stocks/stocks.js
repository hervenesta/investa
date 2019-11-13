import React from 'react';
import './stocks.css';

class Stocks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stocks: [],
        }
    }

    componentDidMount() {
        fetch('/nyse/AAPL')
        .then(res => res.json())
        .then(stocks => this.setState({stocks:stocks.prices}, ()=> console.log('stocks fetched...', stocks.prices)));
    }

    render() {
        return (
            <div>
                <h2>Stocks: AAPL</h2>
                
                    {this.state.stocks.map(stock => 
                    <div key={stock.date}>
                        <ul>
                        <li>{ Intl.DateTimeFormat('en-US',{year: "numeric",month: "short",day: "2-digit",hour: "numeric",
                        minute: "2-digit"                           
                          }).format(stock.date.date)}  
                        </li>
                        <li>{'$'+(stock.close).toFixed(2)} </li>
                        </ul>
                    </div> 
                    )}
                
            </div>
        );
    }
}


export default Stocks;
