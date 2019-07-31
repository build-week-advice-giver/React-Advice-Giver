import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
        this.onChangeEmail = this.onChangePort.bind(this);
        this.gimme = this.gimme.bind(this);

        this.state = {
        username: '',
        password: '',
        }
    }
    onChangeHostName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangePort(e) {
        this.setState({
            password: e.target.value
        });
    }
    
    gimme(e) {
        e.preventDefault();
        axios.get('https://advice-giver.herokuapp.com/messages', {
            headers: { Authorization: localStorage.getItem('token') }})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }

    render() {
        return (
            <div>
                <h3>Display?</h3>
               <button onClick={this.gimme}>try this I guess</button>
            </div>
        )
    }
}