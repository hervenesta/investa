import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import './orderform.css';
import position from './position.json';
import stocks from '../components/stocks.json';
// import Customers from '../components/Customers';

class OrderForm extends Component {

    state = {
      position:" ",
      symbol: " ",
      price: 1.0,
      numberOfShares: 0
    }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSymbolChange = e => {
    e.preventDefault();
    this.setState({
      symbol:e.target.value
    })
  }
  handlePositionChange = e => {
    e.preventDefault();
    this.setState({
      position:e.target.value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault();

    const { symbol, price, numberOfShares, position } = this.state;

    const order = {
      symbol,
      price,
      numberOfShares,
      position
    };
    console.log(order);
      axios
        .post('http://localhost:8080/order', order)
        .then(response => { 
          alert(response.data.status);
          this.resetField();
        })
        .catch(err => {
          console.error(err);
          alert('An error has occured!');
          this.resetField();
      }); 
  };

  resetField = () => {
    document.getElementById("reset-fields").reset();
  }

  render() {
    return (
      <div className="form-container">
        <div >
          <form className="order-form" onSubmit={this.handleSubmit} id="reset-fields">
            <div>
              <label className="mr-sm-2 h2" > Position: </label>
              {/* <input
                type="text"
                className="form-control"
                name="position"
                placeholder="buy or sell"
                onChange={this.handleInputChange}
                required />  */}
              <select value={this.state.position} onChange={this.handlePositionChange}>
                {position.map((obj, index) =>
                  <option key={`${index}-${obj.position}`} value={obj.position}>{obj.position}</option>
                  )}
              </select>
            </div>
            <br/>
            <div >
              <label className="mr-sm-2 h2" > Company: </label>
              {/* <input
                type="text"
                className="form-control"
                name="symbol"
                placeholder="symbol"
                onChange={this.handleInputChange}
                required />  */}
              <select value={this.state.symbol} onChange={this.handleSymbolChange}>
                {stocks.map((obj, index) =>
                  <option key={`${index}-${obj.company}`} value={obj.symbol}>{obj.company}</option>
                  )}
              </select>
            </div>
            <br/>
            <div >
              <label className="mr-sm-2 h2" > Price
              <input
                type="text"
                className="form-control"
                name="price"
                placeholder="price"
                onChange={this.handleInputChange}
                required /> 
              </label> 
            </div>
            <br />
            <div >
              <label className="mr-sm-2 h2" > Number Of Shares
              <input
                type="text"
                className="form-control"
                name="numberOfShares"
                placeholder="number of shares"
                onChange={this.handleInputChange}
                required /> 
              </label>
            </div>
            <br />
            <div >
            <button className="btn btn-success" type="submit"> Place Order </button>
            <NavLink className="nav-link active" to="login">Login</NavLink>
            </div>
          </form>
          {/* <Customers /> */}
        </div>
      </div>
    );
  }
}

export default OrderForm;