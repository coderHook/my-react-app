import React, { Component } from 'react';

export default class User extends Component {
    state = { present: true }

    toggle = () => {
        this.setState({
            present: !this.state.present
        });
    }

    render() {
        return(<div>
            <p>User: { this.props.name }</p>
            <p>{ this.props.name } { this.state.present ? 'is': 'not' } present</p>
            <button onClick={ this.toggle }>Toggle!</button>
        </div>)
    }
}