import React, { Component } from 'react';

class Summary extends Component {
    state = {
        transaction:[]
    }

    componentDidMount(){
        this.getTransaction();
    }

    getTransaction = () => {
        fetch('/summary')
            .then(response => response.json())
            .then(transaction => this.setState({transaction}, () => console.log(transaction)))
            .catch(e => e)
    }

    render(){
        let t = this.state.transaction;
            return(
                <div >
                    
                    {t.map( transact => 
                        <div >
                            <h5 className="text-center">Welcome to your Transactions Summary {transact.username}</h5>
                            <ul >
                                <li  key={transact.id}> Total Sahres: {transact.totalNumberOfShares} - Balance: {transact.balance} - As of: {transact.createdAt} </li>
                            </ul>
                
                        </div>
                    )}
                </div>
            )

    }
}

export default  Summary;