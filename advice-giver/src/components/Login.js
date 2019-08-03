import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class Login extends Component {

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
        const id = localStorage.getItem('id');
        console.log(this.state)

        axios.post('https://advice-giver.herokuapp.com/auth/login',
         { 
            username, 
            password, 
            headers: {Authorization: token, Userid: id } })
            
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("id", res.data.id);   
                this.props.history.push("/answer")       
                }
            )
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

export default withRouter(Login);