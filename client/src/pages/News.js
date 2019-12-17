import React, {Component} from 'react';
//import Loading from '../components/Loading';

class News extends Component{
    
    state = {
        kpi: [],
        Symbol:'',
        loading: true
    }

    componentDidMount(){
        this.getKpi("TSLA")
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
        this.getKpi(Symbol);
        
    }

     getKpi = async (Symbol) => {
        await fetch(`/nyse/kpi/${Symbol}`)
            .then(response => response.json())
            .then(kpi => this.setState({kpi, loading: false,}, () => console.log(kpi)))
            .catch(e => e)
    }
    
    render(){

        const s = this.state.kpi;
        console.log('S:', typeof(s), s);
        return(
            <div>
                <div>
                    <form onClick={this.onSymbolClick}>
                        <input type="text" placeholder="Enter a stock symbol" value={this.state.Symbol} onChange={ this.onSymbolChange } />
                        <input type="submit" value="submit" />
                    </form>
       
                </div>
           
                
                <div className="card">
                    <div  className="card-header" >
                        <h1>{s.quoteType} </h1>
                        
                         
                    </div>
                  
                  
                </div>
            </div>
        )
    }
}


export default News;