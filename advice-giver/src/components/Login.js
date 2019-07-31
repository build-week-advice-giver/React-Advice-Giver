import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
        username: '',
        password: '',
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
    
    onSubmit(e) {
        e.preventDefault();
        const { username, password, } = this.state;
        const token = localStorage.getItem('token');
        console.log(this.state)
        axios
    .post('https://advice-giver.herokuapp.com/auth/login', { username, password, 
    headers: {
        Authorization: token } })
    .then(res => localStorage.setItem("token", res.data.token))
        
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Login</h3>
                <form>
                    <div>
                        <label>Userusername:</label>
                        <input type="text" onChange={this.onChangeHostName}/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text" onChange={this.onChangePort}/>
                    </div>
                   
                    <div className="form-group">
                        <input onClick={this.onSubmit} type="submit" value="Login" />
                    </div>
                </form>
            </div>
        )
    }
}

// import React, { Component } from 'react';

// export default class LoginScreen extends Component {

//     // Properties used by this component:
//     // appActions, deviceInfo
  
//     constructor(props) {
//       super(props);
      
//       this.state = {
//         field: '',
//         field2: '',
//       };
//     }
  
//     textInputChanged_field = (event) => {
//       this.setState({field: event.target.value});
//     }
    
//     textInputChanged_field2 = (event) => {
//       this.setState({field2: event.target.value});
//     }
    
//     onClick_elButton = (ev) => {
//       // Go to screen 'ADVICE GIVER'
//       this.props.appActions.goToScreen('advicegiver', { transitionId: 'fadeIn' });
    
//     }
    
    
//     render() {
      
      
//       return (
//         <div className="AppScreen LoginScreen" >
//           <div className="background">
//             <div className='containerMinHeight elBackground'>
//               <div className='appBg'/>
            
//             </div>
            
//           </div>
//           <div className="layoutFlow" >
//             <div className='elText'>
//               <div className='baseFont' >
//                 <div>Userusername</div>
//               </div>
            
//             </div>
            
//             <div className='elText2'>
//               <div className='baseFont'>
//                 <div>Password</div>
//               </div>
            
//             </div>
            
//             <div className='elField'>
//               <input className='baseFont' type="text" placeholder='Userusername' onChange={this.textInputChanged_field} value={this.state.field}  />
            
//             </div>
            
//             <div className='elField2'>
//               <input className='baseFont'type="text" placeholder='Password' onChange={this.textInputChanged_field2} value={this.state.field2}  />
            
//             </div>
            
//             <div className='elButton'>
//               <button className='actionFont' color="accent" onClick={this.onClick_elButton} >Login
//               </button>
            
//             </div>
            
//           </div>
         
          
//         </div>
//       )
//     }
    
  
//   }
  
  