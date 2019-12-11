import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class OrderForm extends Component {

    state = {
      symbol: '',
      price: 1.0,
      numberOfShares: 0,
      position:''
    }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { symbol, price, numberOfShares, position } = this.state;

    const order = {
      symbol,
      price,
      numberOfShares,
      position
    };

      axios
        .post('http://localhost:8080/order', order)
        .then(() => console.log('Order Created'))
        .catch(err => {
          console.error(err);
      }); 
  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '50%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="position"
                placeholder="buy or sell"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '50%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="symbol"
                placeholder="symbol"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="price"
                placeholder="price"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="numberOfShares"
                placeholder="number of shares"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }}>
              <button className="btn btn-success" type="submit">
                Place Order
              </button>
            </div>
          </form>
          <div>
            <NavLink className="nav-link active" to="login">Login</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderForm;