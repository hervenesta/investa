import React, {Component} from 'react';
import stocks from './stocks.json';
// import Loading from '../components/Loading';
import './stockinfos.css';

console.log(stocks);

class Stockinfos extends Component {

    state = {
        symbol: " ",
        data: [],
    }
    componentDidMount() {
        this.getData("JPM");
        this.setState({loading:true});
    }
    onsymbolSelect = (event) => {
        event.preventDefault();
        this.setState({symbol:event.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {symbol} = this.state;
        this.getData(symbol);
    }
    getData = async (symbol) => {
        await fetch(`/nyse/kpi/${symbol}`)
            .then(response => response.json())
            .then(data => this.setState({data}, () => console.log(data)))
    }

    render() {
    //    if(this.state.loading){
    //        return <Loading />
    //    }
        return (
            <div id="news">
                <h3>Learn about a company before investing</h3>
                <div id="title-form">
                    <form onSubmit={this.handleSubmit}>
                        <span>Select stock: </span>
                        <select value={this.state.symbol} onChange={this.onsymbolSelect}>
                        {stocks.map((stock, index) => 
                            <option key={`${index}-${stock.symbol}`} value={stock.symbol}>{stock.company}</option>
                            )}
                        </select>
                        <button type="submit" value="Submit"> submit</button>
                    </form>
                    <h2>Company name: {this.state.data.quoteType}</h2>
                </div>
                <p>{this.state.data.summary}</p>
                <div>
                    <ul>
                        <li>Current Stock Price: ${this.state.data.price}</li>
                        <li>Return on Equity: {this.state.data.ROE}</li>
                        <li>Return on Asset: {this.state.data.ROA}</li>
                        <li>Revenue: ${this.state.data.revenue}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Stockinfos;