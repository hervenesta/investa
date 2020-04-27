import React, { Component } from 'react';
import './nyse.css';
import Loading from '../components/Loading';

class Nyse extends Component {
    state = {
        symbols:[],
        allData: [],
        loading: true
    }

    componentDidMount(){
        this.getSymbols();
    }
    handleChange = e => {
        const symbols = this.state.allData.filter(item =>
			item.CompanyName.toLowerCase().includes(e.target.value.toLowerCase())
		);
		this.setState({ symbols, loading: false });
    }

    getSymbols = () => {
        fetch('/nyse')
            .then(response => response.json())
            .then(symbols => this.setState({
                symbols:symbols,
                allData: symbols, 
                loading: false
            }, () => console.log(symbols)))
            .catch(e => e)
    }

    render(){
        if(this.state.loading) {
            return <Loading />;
        }
        return(
            <div className="wrapper">
                <h5 className="text-center">New York Stock Exchange Companies</h5>
                <div className="search-outer">
                    <form className="searchform">
                        {/* input field activates onKeyUp function on state change */}
                        <input
                            type="search"
                            onChange={this.handleChange}
                            name="s"
                            id="s"
                            placeholder="Search"
                        />
                        <button type="submit" id="searchsubmit">
                            <i className="fa fa-search" aria-hidden="true" />
                        </button>
                    </form>
                </div>
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