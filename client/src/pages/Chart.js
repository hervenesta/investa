import React, {Component} from 'react';
import _ from 'lodash';
import { Line } from 'react-chartjs-2';
import ChartHeader from './ChartHeader';
import './chart.css';
import moment from 'moment';
import Customers from '../components/Customers';
// import Loading from '../components/Loading';

// import symbols from './symbols.json';

// console.log(symbols);

class Charts extends Component{

    state = {
        historicalData: [],
        Symbol:"TSLA",
        errorMessage:""
    }

    componentDidMount(){
        console.log("componentdidmount running...")
        this.getSymbol("TSLA");
    }

    onSymbolChange = event => {
        console.log("running onchange...");
        event.preventDefault();
        this.setState({Symbol:event.target.value.toUpperCase()});
    }

    onSymbolClick = (e) => {
        console.log("running onclick...");
        e.preventDefault();
        const Symbol = this.state.Symbol;
        this.getSymbol(Symbol);
        
    }

    getSymbol = async (Symbol) => {
        console.log("fetching data...")
        await fetch(`/chart/${Symbol}`)
            .then(response => response.json())
            .then(historicalData => this.setState({historicalData}))
            .catch(e => console.log(e))
        /*const response = fetch(`/chart/${Symbol}`);
        if(response.status === 404){
            this.setState({errorMessage: "Symbol Not Found"});
        }
        const historicalData = response.json();
        this.setState({historicalData:historicalData}) */
    }

    formatChartData(){
        console.log("graph running...");
        const stocks = this.state.historicalData;
        const stockdate = stocks.timestamp;
        
        return(
            {
                labels: _.map(_.keys(stockdate), stockdate => moment(stockdate.date).format("ll") ),
                datasets: [
                    {
                        label: "Stocks",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: _.values(stocks.price)
                    }
                ]
            }
        )
    }


    render(){
        console.log('render is running...');
       /* if(this.state.Symbol === undefined){
            return(
                <div>Please Wait...</div>
            )
        }*/
        if (this.state.historicalData) {
            return(
                <div>
                    <ChartHeader title="NYSE Stock Index"/>
                    <div className="subheader">
                        <form onClick={this.onSymbolClick}>
                            <input type="text" placeholder="Enter a stock symbol" value={this.state.Symbol} onChange={this.onSymbolChange} />
                            <input type="submit" value="submit" />
                        </form>
                        
                    </div>
                    <div className="container-chart">
                        <div className="row-chart">
                            <div className="graph-title">
                                <h6>{this.state.Symbol} graph over the last 30 days</h6>
                            </div>
                            <div className="col-chart">                    
                                <Line data={this.formatChartData()} height={50} />
                            </div>
                        </div>
                    </div>
                    {this.state.errorMessage}
                    <div></div>
                    <Customers />
                </div>     
            );
        }
        return null;
    }
    
}

export default Charts;