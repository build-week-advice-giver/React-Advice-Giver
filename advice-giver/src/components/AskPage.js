import React, { Component } from 'react';
import axios from 'axios';


export default class AskPage extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isAnswered: false,
            private_: false, 
            message: "", 
            type: "", 
            title: "", 
            user_id: '',
        };
    
    }
    onSubmit(e) {
        e.preventDefault();
        const {  
            isAnswered,
            private_,
            message,
            type,
            title,
            user_id,
        } = this.state;
        
        console.log(this.state)

        axios.post('https://advice-giver.herokuapp.com/auth/messages', 
        {
            isAnswered,
            'private': private_,
            message,
            type,
            title,
            user_id,
        } 
        )
    }
     

    render() {
        return (
            <div style={{marginTop: 50}}>
              <h3>Ask a Question!</h3>
              <form>
                  <div>
                      <label>Title:</label>
                      <input type="text" name='title' onChange={this.onChangeHostName}/>
                  </div>
                  <div>
                      <label>Question: </label>
                      <input type="text" name='message' onChange={this.onChangePort}/>
                  </div>

                  <div>
                      <label>Type: </label>
                      <input type="text" name='type' onChange={this.onChangeAdv}/>
                  </div>

                 
                  <div className="form-group">
                      <input onClick={this.onSubmit} type="submit" value="Submit" />
                  </div>
              </form>
          </div>
        )
    }
}