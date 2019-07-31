import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newUser } from './actions'

class SignUp extends React.Component {
    state = {
      credentials: {
        username: '',
        password: '',
        email: '',
      }
    }
    
  
    textInputChanged_field = (event) => {
      this.setState({username: event.target.value});
    }
    
    textInputChanged_field2 = (event) => {
        this.setState({password: event.target.value});
      }

    textInputChanged_field3 = (event) => {
        this.setState({email: event.target.value});
      }  
    
    handleSignup = (e) => {
        e.preventDefault();
        console.log(this.state);
        // this.props
        //   .newUser(this.state.credentials)
        //   .then(() => this.props.history.push("/auth"));
    
    }
    
    
    render() {
      
      
      return (
        <div>
          <form onSubmit={this.handleSignup}>
          
            
            <div>
              <input className='baseFont' type="text" placeholder='Username' onChange={this.textInputChanged_field} value={this.state.username}  />
            
            </div>
            
            <div className='elField2'>
              <input className='baseFont'type="text" placeholder='Password' onChange={this.textInputChanged_field2} value={this.state.password}  />
            
            </div>

            <div className='elField2'>
              <input className='baseFont'type="text" placeholder='Email' onChange={this.textInputChanged_field3} value={this.state.email}  />
            
            </div>
            
            
            <div>
              <button>Register</button>
            
            </div>
            
          
         
            </form>
        </div>
      )
    }
    
  
  }

  const mapStateToProps = state =>{
    return{
        smurfs: state.smurfs
    }
}

  export default connect(
    mapStateToProps, { newUser })(SignUp)