import React, {Component} from 'react';

class News extends Component{

    state = {
        kpi: []
    }

    componentDidMount(){
        this.getKpi()
    }

    getKpi = () => {
        fetch('/nyse/kpi/TSLA')
            .then(response => response.json())
            .then(kpi => this.setState({kpi}, () => console.log(kpi)))
            .catch(e => e)
    }
    render(){
        if (this.state.kpi === undefined || this.state.kpi.summary === undefined) {
            return(<div></div>);
        }
        const s = this.state.kpi.summary;
        console.log('S:', typeof(s), s);
        return(
            /*
            <div className="card">
                    <div  className="card-header" >
                        {this.state.kpi.price.longName} - {this.state.kpi.price.symbol}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">return On Equity (ROE) - {this.state.kpi.financialData.returnOnEquity.fmt}</li>
                        <li className="list-group-item">Return On Assets(ROA) - {this.state.kpi.financialData.returnOnAssets.fmt} </li>
                        <li className="list-group-item">Debt to Equity - {this.state.kpi.financialData.debtToEquity.fmt}</li>
                    </ul>
                )}
            </div>*/
            <div>
                <p>{s.longBusinessSummary}</p>
            </div>
 
        )
    }
}


export default News;