import React, { Component } from 'react';
import './nyse.css';
import Loading from '../components/Loading';

class Nyse extends Component {
    state = {
        symbols:[],
        loading: true
    }

    componentDidMount(){
        this.getSymbols();
    }

    getSymbols = () => {
        fetch('/nyse')
            .then(response => response.json())
            .then(symbols => this.setState({symbols, loading: false}, () => console.log(symbols)))
            .catch(e => e)
    }

    render(){
        if(this.state.loading) {
            return <Loading />;
        }
        return(
            <div className="wrapper">
                <div className="  my-2" >
                    <h5 className="  text-center">New York Stock Exchange Companies</h5>
                    <div className="wrap d-flex justify-content-right">
                        <div className="search">
                            <input type="text" className="searchTerm" name="term" placeholder="Enter Stock here?"/>
                            <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div >
                <div className="stockList">
                    {this.state.symbols.map( symbol => 
                    <div className="border-0 collection">
                        <ul className="container">
                            <li className="collection-item"> <span className="Symbol">{symbol.Symbol} </span>- {symbol.CompanyName} </li>
                        </ul>
                    </div>
                )}
                </div>
            </div>
            )
           
        
    }
}

export default  Nyse;