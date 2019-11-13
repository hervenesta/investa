import React, { Component } from 'react';

class Nyse extends Component {
    state = {
        symbols:[]
    }

    componentDidMount(){
        this.getSymbols();
    }

    getSymbols = () => {
        fetch('/nyse')
            .then(response => response.json())
            .then(symbols => this.setState({symbols}, () => console.log(symbols)))
            .catch(e => e)
    }

    render(){
        if(this.state.symbols){
            return(
                <div >
                    <h5 className="text-center">New York Stock Exchange Companies</h5>
                    {this.state.symbols.map( symbol => 
                        <div className="collection">
                            <ul className="container">
                                <li className="collection-item"> {symbol.Symbol} - {symbol.CompanyName} </li>
                            </ul>
                        </div>
                    )}
                </div>
            )
        }

    }
}

export default  Nyse;