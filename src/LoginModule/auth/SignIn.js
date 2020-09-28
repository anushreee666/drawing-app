import React from "react";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({ [e.target.id]: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();

		console.log("signin ");
	}
	render() {
		//console.log("uid", this.props.uid);
		/*if (this.props.uid) return <Redirect to="../"></Redirect>;*/ //checking if already logged in
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign In</h5>
					<div className="input-field">
						<label htmlFor="email"> Email</label>
						<input type="email" id="email" onChange={this.handleChange}></input>
					</div>
					<div className="input-field">
						<label htmlFor="password"> Password</label>
						<input
							type="password"
							id="password"
							onChange={this.handleChange}
						></input>
					</div>
					<div className="input-field">
						<button className="btn ">Login</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
