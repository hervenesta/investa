import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import './orderform.css';

class OrderForm extends Component {

    state = {
      symbol: " ",
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
        <div >
          <form className="order-form" onSubmit={this.handleSubmit}>
            <div  >
              <div>
                <label class="mr-sm-2 h2" > Position: 
                <input
                  type="text"
                  className="form-control"
                  name="position"
                  placeholder="buy or sell"
                  onChange={this.handleInputChange}
                /> </label>
              </div>
            </div>
            <br/>
              <div >
                <label class="mr-sm-2 h2" for="uname"> Symbol: 
                <input
                  type="text"
                  className="form-control"
                  name="symbol"
                  placeholder="symbol"
                  onChange={this.handleInputChange}
                /> </label>
              </div>
            <br/>
            <div >
              <label class="mr-sm-2 h2" > Price:
              <input
                type="text"
                className="form-control"
                name="price"
                placeholder="price"
                onChange={this.handleInputChange}
              /> </label>
              
            </div>
            <br />
            <div >
              <label class="mr-sm-2 h2" > Number Of Shares:
              <input
                type="text"
                className="form-control"
                name="numberOfShares"
                placeholder="number of shares"
                onChange={this.handleInputChange}
              /> </label>
            </div>
            <br />
            <div >
              <button className="btn btn-success" type="submit">
                Place Order
              </button>
              <NavLink className="nav-link active" to="login">Login</NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default OrderForm;