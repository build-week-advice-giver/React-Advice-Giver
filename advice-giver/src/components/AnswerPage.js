import React, { Component } from 'react';
import axios from 'axios';


export default class Create extends Component {

    constructor(props) {
        super(props);
        this.gimme = this.gimme.bind(this);

        this.state = {
        messages: '',
        }
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
  })
     this.setState = {
         messages: {response.data}
     }
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