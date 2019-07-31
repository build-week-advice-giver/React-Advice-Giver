import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            password: '',
            email: '',
            adviceGiver: false,
            expertise: null,
            yearsOfExperience: 10,
            age: 30,
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
  onChangeEmail(e) {
    this.setState({
        email: e.target.value
    });
}
    onSubmit(e) {
        e.preventDefault();
        const user = {
          name: this.state.name,
          password: this.state.password,
          email: this.state.email,
          adviceGiver: false,
        } = this.state

        console.log(this.state)

       
        axios.post('https://advice-giver.herokuapp.com/auth/register', user)
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
        
        
        
        // this.setState({
        //     name: '',
        //     password: '',
        //     email:'',
        //     adviceGiver: false,
        //     expertise: null,
        //     yearsOfExperience: 10,
        //     age: 30,
        // });
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:  </label>
                        <input type="text" className="form-control" onChange={this.onChangeHostName}/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text" className="form-control"onChange={this.onChangePort}/>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" className="form-control"onChange={this.onChangeEmail}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { newUser } from './actions'

// class SignUp extends React.Component {
//     constructor(){
//         super()
//     this.state = {
//       credentials: {
//         username: '',
//         password: '',
//         email: '',
//       }
//     }
    
  
//     textInputChanged_field = (event) => {
//       this.setState({username: event.target.value});
//     }
    
//     textInputChanged_field2 = (event) => {
//         this.setState({password: event.target.value});
//       }

//     textInputChanged_field3 = (event) => {
//         this.setState({email: event.target.value});
//       }  
    
//     handleSignup = (e) => {
//         e.preventDefault();
//         let state = {
//             credentials: {
//               username: '',
//               password: '',
//               email: '',
//             }
//           }
//         const { username, password, email } = this.state
//         console.log(this.state);
//         this.props
//           .newUser(this.state)
//           // .then(() => this.props.history.push("/auth"));
    
//     }

    
//     render() {
      
      
//       return (
//         <div>
//           <form onSubmit={this.handleSignup}>
          
            
//             <div>
//               <input className='baseFont' type="text" placeholder='Username' onChange={this.textInputChanged_field} value={this.state.username}  />
            
//             </div>
            
//             <div className='elField2'>
//               <input className='baseFont'type="text" placeholder='Password' onChange={this.textInputChanged_field2} value={this.state.password}  />
            
//             </div>

//             <div className='elField2'>
//               <input className='baseFont'type="text" placeholder='Email' onChange={this.textInputChanged_field3} value={this.state.email}  />
            
//             </div>
            
            
//             <div>
//               <button>Register</button>
            
//             </div>
            
          
         
//             </form>
//         </div>
//       )
//     }
    
  
//   }}

//   const mapStateToProps = state =>{
//     return{
//         smurfs: state.smurfs
//     }
// }

//   export default connect(
//     mapStateToProps, { newUser })(SignUp)