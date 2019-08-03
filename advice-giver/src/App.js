import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import AnswerPage from './components/AnswerPage'
import AskPage from './components/AskPage'
import SignUp from './components/SignUp'
import Landing from './components/Landing'



export default class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <h1>Advice Giver</h1>
        <Route exact path='/' render={props => (<Landing {...props} />)}/>
        <Route path='/login' render={props => (<Login {...props} />)}/>
        <Route path='/signup' render={props => (<SignUp {...props} />)}/>

        <PrivateRoute exact path="/ask" component={AskPage}/>
        <PrivateRoute exact path="/answer" component={AnswerPage}/>
      </div>
    )
  }

}
