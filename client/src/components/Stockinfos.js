import React, {Component} from 'react';
import stocks from './stocks.json';
// import Loading from '../components/Loading';
import './stockinfos.css';

console.log(stocks);

class Stockinfos extends Component {

    state = {
        symbol: " ",
        Data: [],
        Header:[{'Current Stock Price':0,'Return on Equity':0,'Return on Asset':0,'Revenue':0}]
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
            .then(Data => this.setState({
                Data:Data
            }, () => console.log(Data)))
    }
    renderTableHeader() {
        let header = Object.keys(this.state.Header[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     renderTableData() {
        return this.state.Data.map((t, index) => {
           return (
              <tr key={index}>
                    <td>${t.price}</td>
                    <td>{t.ROE}</td>
                    <td>{t.ROA}</td>
                    <td>${t.revenue}</td>
              </tr>
           )
        })
     }

    render() {
    //    if(this.state.loading){
    //        return <Loading />
    //    }
    const s = this.state.Data;
    const summary = s.map(data => (
        data.summary
    ))
    const quoteType = s.map(data => (
        data.quoteType  
    ))

        return (
            <div id="news">
                <h3>Learn more about your company </h3>
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
                </div>
                <div>
                    <div className="w3-card-4">
                        <h3 id='title'>Key Performance Indicators</h3>
                        <table id='transaction'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                        </table>
                    </div>
                </div>
                <div className="space"></div>
                <div className="w3-card-4 ">
                    <p className="card-mg">{summary[0]}</p>
                    <div className="w3-container w3-center">
                        <p>{quoteType[0]}</p>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Stockinfos;