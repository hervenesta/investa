import React, {Component} from 'react';
import _ from 'lodash';
import { Line, Chart } from 'react-chartjs-2';
//import moment from 'moment';
import symbols from './symbols.json';

//console.log(symbols);

class Charts extends Component{
    state = {
        historicalData: []
    }

    componentDidMount(){
        this.getStockData();
    }

    getStockData = () => {
        fetch('/chart/GOOGL')
            .then(response => response.json())
            .then(historicalData => this.setState({historicalData}, console.log(historicalData)))
            .catch(e => e)
    }
    formatChartData(){
        const stocks = this.state.historicalData
        const stockdate = stocks.timestamp
        return(
            {
                labels: _.map(_.keys(stockdate), stockdate => Intl.DateTimeFormat('en-US',{year: "numeric",month: "short",day: "2-digit"                          
                  }).format(stockdate.date) ),
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
        if(this.state.historicalData){
            return(
                <div>
                    <Line data={this.formatChartData()} height={50} />
                </div>
            );
        }
        return null;

    }
    
}

export default Charts;