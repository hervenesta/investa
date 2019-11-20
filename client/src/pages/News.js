import React, {Component} from 'react';

class News extends Component{
    
    state = {
        kpi: [],
    }

    componentDidMount(){
        this.getKpi()
    }

     getKpi = async () => {
        await fetch('/nyse/kpi/TSLA')
            .then(response => response.json())
            .then(kpi => this.setState({kpi}, () => console.log(kpi)))
            .catch(e => e)
    }
    
    render(){
        
        if (this.state.kpi === undefined || this.state.kpi.summary === undefined ) {
            return(<div> 
               <h5>Please wait...</h5>
            </div>);
        }
        const s = this.state.kpi;
        console.log('S:', typeof(s), s);
        return(
            
            <div className="card">
                    <div  className="card-header" >
                        {s.quoteType.longName} 
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">return On Equity (ROE) - {s.financialInfo.returnOnEquity.fmt}</li>
                        <li className="list-group-item">Return On Assets(ROA) - {s.financialInfo.returnOnAssets.fmt} </li>
                        <li className="list-group-item">Debt to Equity - {s.financialInfo.debtToEquity.fmt}</li>
                    </ul>
            </div>
 
        )
    }
}


export default News;