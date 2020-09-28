import React from "react";

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null,
			first: null,
			last: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({ [e.target.id]: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();

		this.console.login("signup");
	}
	render() {
		/* if (this.props.uid) return <Redirect to="../" />; */ /*if already logged in*/
		return (
			<div className="container ">
				<form onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign Up</h5>
					<div className="input-field">
						<label htmlFor="text"> First Name</label>
						<input type="text" id="first" onChange={this.handleChange}></input>
					</div>
					<div className="input-field">
						<label htmlFor="text"> Last Name</label>
						<input type="text" id="last" onChange={this.handleChange}></input>
					</div>
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
						<button className="btn">Sign Up</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
