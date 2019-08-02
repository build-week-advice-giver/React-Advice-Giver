import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
        this.onChangeAdv = this.onChangeAdv.bind(this);
        this.onChangeExp = this.onChangeExp.bind(this);
        this.onChangeYears = this.onChangeYears.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
        username: '',
        password: '',
        adviceGiver: false,
        expertise: null,
        yearsOfExperience: null,
        age: null,
        email: '',

      }
    }
    
  
onChangeHostName(e) {
      this.setState({
          username: e.target.value
      });
  }
onChangePort(e) {
      this.setState({
          password: e.target.value
      });
  }
  
onChangeAdv(e) {
    this.setState({
        adviceGiver: e.target.value
    });
}

onChangeExp(e) {
  this.setState({
      expertise: null
  });
}

onChangeYears(e) {
  this.setState({
      yearsOfExperience: parseInt(e.target.value)
  });
}

onChangeAge(e) {
  this.setState({
      age: parseInt(e.target.value)
  });
}
onChangeEmail(e) {
  this.setState({
      email: e.target.value
  });
}

    onSubmit(e) {
        e.preventDefault();
        const { username, 
          password, 
          adviceGiver,
          expertise,
          yearsOfExperience,
          age,
          email, } = this.state;
        
        console.log(this.state)
        axios.post('https://advice-giver.herokuapp.com/auth/register', 
          { 
            username, 
            password, 
            adviceGiver,
            expertise,
            yearsOfExperience,
            age,
            email,  
          } )
    .then(() => {this.props.history.push("/")})
    
        }
    render() {
      return (
          <div style={{marginTop: 50}}>
              <h3>Sign Up</h3>
              <form>
                  <div>
                      <label>Userusername:</label>
                      <input type="text" onChange={this.onChangeHostName}/>
                  </div>
                  <div>
                      <label>Password: </label>
                      <input type="text" onChange={this.onChangePort}/>
                  </div>

                  <div>
                      <label>Advice Giver?: </label>
                      <input type="text" onChange={this.onChangeAdv}/>
                  </div>

                  <div>
                      <label>expertise: </label>
                      <input type="text" onChange={this.onChangeExp}/>
                  </div>

                  <div>
                      <label>yearsOfExperience: </label>
                      <input type="number" onChange={this.onChangeYears}/>
                  </div>

                  <div>
                      <label>age: </label>
                      <input type="number" onChange={this.onChangeAge}/>
                  </div>

                  <div>
                      <label>Email: </label>
                      <input type="text" onChange={this.onChangeEmail}/>
                  </div>
                 
                  <div className="form-group">
                      <input onClick={this.onSubmit} type="submit" value="Login" />
                  </div>
              </form>
          </div>
      )
  }
}
  export default withRouter(SignUp);