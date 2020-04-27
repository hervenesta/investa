import React, { Component } from 'react';
import fire from '../config/fire';

class Logout extends Component {

    logout = () => {
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Logout;