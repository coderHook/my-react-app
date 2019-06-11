import React, { Component } from 'react';
import User from './User'

export default class Userboard extends Component {

    render() {
        return (<div>
            <h1>User Board</h1>
            <User name="Alice" />
            <User name="Pedro" />
            <User name="Maria" />
        </div>)
    }
}