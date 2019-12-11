import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './NavBar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Charts from './pages/Chart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Nyse from './pages/Nyse';
import OrderForm from './pages/OrderForm';
import Summary from './pages/Summary';

class App extends React.Component {
  render() {
    return (
        <div>
          <Router>
            <Route path="/" component={Welcome}/>
            <Route path="/" component={Navbar} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/news" component={News} />
            <Route path="/chart" component={Charts} />
            <Route exact path="/nyse" component={Nyse} />
            <Route path="/order" component={OrderForm} />
            <Route path="/summary" component={Summary} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Router>
        </div>
    );
  }
}

export default App;
