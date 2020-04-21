import React, { Component } from 'react';
import Loading from '../components/Loading';
import Customers from '../components/Customers';
import './summary.css';

class Summary extends Component {
    state = {
        transaction:[],
        loading: true,
        Header: [{'Transaction Id':'0', Stock:'symbol', position:'position', price:'price', 'number Of Shares':'numberOfShares', total:'total', createdAt:'made on'}],
        summaryHeader: [{'total number of shares': '90', balance:'90', createdAt:''}]
    }

    componentDidMount(){
        this.getTransaction();
    }

    getTransaction = () => {
        fetch('/summary')
            .then(response => response.json())
            .then(transaction => this.setState({transaction, loading: false}, () => console.log(transaction)))
            .catch(e => e)
    }

    summaryTableHeader() {
        let summaryHeader = Object.keys(this.state.summaryHeader[0])
        return summaryHeader.map((key, index) =>{
            return <th key={index}> {key.toUpperCase()}</th>
        })
    }
    
    renderTableHeader() {
        let header = Object.keys(this.state.Header[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }


    renderTableData() {
        return this.state.transaction.map((t, index) => {
           return (
              <tr key={t.id}>
                  <td>{t.id}</td>
                 <td>{t.symbol}</td>
                 <td>{t.position}</td>
                 <td>${t.price.toFixed(2)}</td>
                 <td>{t.numberOfShares.toFixed(2)}</td>
                 <td>${t.total.toFixed(2)}</td>
                 <td>{t.createdAt}</td>
              </tr>
           )
        })
     }

     exportCsv(){
         let csvRow = [];
         let A = [[ 'ff','number of transaction','transaction id','symbol', 'position', 'price', 'numberOfShares','total', 'createdAt']];
         let re = this.state.transaction;

         for(let item=0;item<re.length;item++){
             A.push([item,re[item].id,re[item].symbol, re[item].position,re[item].price,re[item].numberOfShares,re[item].total,re[item].createdAt])
         }
         //console.warn(A);
         for(let i=0;i<A.length;++i){
            csvRow.push(A[i].join(","))
         }
         let csvString = csvRow.join("%0A");
         let a = document.createElement("a");
         a.href='data:attachment/csv' + csvString;
         a.target="_blank";
         a.download="statement.csv";
         document.body.appendChild(a);
         a.click();
         console.warn(csvString);
     }

    render(){
        let t = this.state.transaction;
       
        let temp = t.map((user) => {
            return {
                id: user.user.id,
                username: user.user.username,
                totalNumberOfShares: user.user.totalNumberOfShares,
                balance: user.user.balance,
                createdAt: user.user.createdAt
            }
        })

        //console.log(temp);
        if(this.state.loading) {
            return <Loading />;
        }
            return(
                <div >
                    <div>
                        <h3 id="title">{temp[0].username}'s orders</h3>
                    </div>
                    <div>
                        <table id='transaction'>
                            <tbody>
                                <tr>{this.summaryTableHeader()}</tr>
                                    <td>{temp[0].totalNumberOfShares}</td>
                                    <td> ${Math.round(temp[0].balance)}</td>
                                    <td>{temp[0].createdAt}</td>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 id='title'>Transaction Details</h3>
                        <table id='transaction'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                        </table>
                    </div>
                    <button onClick={() => {this.exportCsv()}}>Download csv</button>
                    <Customers />
                </div>
            )

    }
}

export default  Summary;