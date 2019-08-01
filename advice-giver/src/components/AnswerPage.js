import React, { Component } from 'react';
import axios from 'axios';


export default class Create extends Component {

    constructor(props) {
        super(props);
        this.gimme = this.gimme.bind(this);

        this.state = {messages: []};
    
    }
    
    gimme(e) {
        e.preventDefault();
        axios.get('https://advice-giver.herokuapp.com/messages', {
            headers: { Authorization: localStorage.getItem('token') }})
            .then(response => {
                this.setState({ messages: response.data });
              })
   

  .catch(function (error) {
    console.log(error);
  })}
     

    render() {
        return (
            <div>
                <h3>Display?</h3>
               <button onClick={this.gimme}>Load Messages</button>
               <p>{this.state.messages.map((item, index) => (
  <p key={index}>{item.message}</p>
))}</p>
               

               
            </div>
        )
    }
}