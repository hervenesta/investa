import React, {Component} from 'react';
import Loading from '../components/Loading';

class News extends Component{
    
    state = {
        kpi: [],
        loading: true
    }

    componentDidMount(){
        this.getKpi()
    }

     getKpi = async () => {
        await fetch('/nyse/kpi/TSLA')
            .then(response => response.json())
            .then(kpi => this.setState({kpi, loading: false,}, () => console.log(kpi)))
            .catch(e => e)
    }
    
    render(){
        if(this.state.loading) {
            return <Loading />;
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