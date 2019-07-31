import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'
import Login from './components/Login'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>App.js Text</h1>
        <Login />
      </div>
    )
  }

}
