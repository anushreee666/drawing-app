import React from "react";

import Profile from "./Profile";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", profile: [] };
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.getProfile = this.getProfile.bind(this);
	}
	onChange = (e) => {
		this.setState({ username: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.getProfile(this.state.username);
		console.log(this.state.profile);
	};

	getProfile = async (username) => {
		const URL = `https://api.github.com/users/${username}`;

		const resp = await fetch(URL, { origin: "cors" });

		const respData = await resp.json();
		console.log("resp data", respData);
		this.setState({ profile: respData, username: "" });
	};

	render() {
		return (
			<div className="container center">
				<form onSubmit={this.onSubmit}>
					<h3>Github User Profile App </h3>
					<div className="row">
						<div className="col l6 m6 s6">
							<input
								type="text"
								placeholder="Enter Github User name"
								onChange={this.onChange}
							></input>
						</div>
						<div className="col l6 m6 s6">
							<input type="submit" value="search" className="btn_start btn" />
						</div>
					</div>
				</form>
				{this.state.profile.length !== 0 &&
					this.state.profile.message === undefined && (
						<Profile profile={this.state.profile}></Profile>
					)}
				{this.state.profile.message && <h6> {this.state.profile.message}</h6>}
			</div>
		);
	}
}

export default Home;
/*
				{this.state.itemList.length !== 0 && (
					<center>
						<div className="x" align="center">
							<RecipeList recipeList={this.state.itemList}></RecipeList>
						</div>
					</center>
				)}{" "}
				*/
