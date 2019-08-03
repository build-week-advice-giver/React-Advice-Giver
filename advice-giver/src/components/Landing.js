import React from 'react'
import { Link } from 'react-router-dom'


export default class Landing extends React.Component {
	// componentDidMount() {
	// 	this.props.getAccount()
	// }

	// logout = (evt) => {
	// 	evt.preventDefault()

	// 	localStorage.removeItem('token')
	// 	this.props.history.push('/login')
	// }

	render() {
		return (
			<div>
				{/* <button type="button" onClick={this.logout}>Logout</button> */}
                <Link to='/login'>Login</Link>
                <br></br>
                <Link to='/signup'>Sign Up</Link>
			</div>
		)
	}
}