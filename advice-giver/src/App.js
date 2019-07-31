import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import AnswerPage from './components/AnswerPage'
import AskPage from './components/AskPage'
import SignUp from './components/SignUp'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>App.js Text</h1>
        <Route path='/login' exact path='/' render={props => (<Login {...props} />)}/>
        <Route path='/signup' render={props => (<SignUp {...props} />)}/>

        <PrivateRoute exact path="/ask" component={AskPage}/>
        <PrivateRoute exact path="/answer" component={AnswerPage}/>
      </div>
    )
  }

}
