import React, { Component } from 'react';
import axios from 'axios';


export default class Answerpage extends Component {

    constructor(props) {
        super(props);
        this.gimme = this.gimme.bind(this);

        this.state = {messages: []};
    
    }
    componentDidMount() {
		this.gimme()
    }
    
    gimme() {
       axios.get('https://advice-giver.herokuapp.com/messages', {
            headers: { Authorization: localStorage.getItem('token') }})
            .then(response => {
                this.setState({ messages: response.data });
              })
            .catch(function (error) {
                console.log(error);
            })
    }
    // answer(){
    //     e.preventDefault();
    //     const = {} =this.state;
    //     axios.post('https://advice-giver.herokuapp.com/messages'), {

    //     }
    // } 

    render() {
        return (
            <div>
                <h3>Questions!</h3>
                <p>{this.state.messages.map((item, index) => (
                    <p key={index}>{item.message}
                    <input type='text' placeholder='Type your answer here!'></input>
                    <button>Submit</button></p>
                ))} </p>
               

               
            </div>
        )
    }
}