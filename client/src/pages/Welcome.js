import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fire from '../config/fire';
// import Logout from '../components/Logout';
import './Welcome.css';


class Welcome extends Component {

    state = {
        user: null
    }
    
    componentDidMount() {
        this.authListener();
    }
    
    authListener =() => {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
            this.setState({ user }, console.log(user));
            } else {
            this.setState({ user: null})
            }
        })
    }                          
    
    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return(
            <div>
                <nav id="navbar">
                    <h5>
                        <span className="text-primary">
                            <Link to="/"><i className="fas fa-hand-holding-usd"> Investa</i></Link>
                        </span>
                    </h5>
                    <ul>
                        <li><Link className="color-white"  to="/">Home</Link></li>
                        <li><Link className="color-white"  to="about">About</Link></li>
                        <li><Link className="color-white"  to="nyse">NYSE</Link></li>
                        <li><Link className="color-white"  to="news">News</Link></li>
                        <li><Link className="color-white"  to="chart">Chart</Link></li>
                        <li><Link className="color-white"  to="order">Trade</Link></li>
                        <li><Link className="color-white"  to="summary">Summary</Link></li>
                        <li><Link className="color-white"  to="login">Login</Link></li>
                        <li><Link className="color-white"  to="signup">Sign Up</Link></li>
                        
                        {/* <li><Link className="color-white" onClick={this.logout}>Logout</Link></li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Welcome;