import React, { Component } from 'react';

import './App.css';


class Success extends Component {
    render() {
        const {email} = this.props.match.params;
        return(
            <div>
                <h3>Login Page</h3>
        <h2>Hello {email}</h2>
        <button onClick={this.logout.bind(this)}>Logout</button>
            </div>
        );
    }
}

export default Success;
