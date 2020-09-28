import React from "react";
import Axios from "axios";
import MovieList from "./MovieList";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { movieName: "", movieList: [] };
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.getData = this.getData.bind(this);
	}
	onChange = (e) => {
		this.setState({ movieName: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.getData(this.state.movieName);
	};
	getData = async (movieName) => {
		const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=fd334544&s=${movieName}`;
		const result = await Axios.get(URL);
		console.log(result);
		let movieList = result.data.Search;
		this.setState({ movieList: movieList });
	};

	render() {
		return (
			<div className="container center">
				<form onSubmit={this.onSubmit}>
					<h5>Lets search for Movies </h5>
					<div className="row">
						<div className="col l6 m6 s6">
							<input
								type="text"
								placeholder="Enter Movie Name"
								onChange={this.onChange}
								className="input-search"
								style={{ color: "#ffffff" }}
							></input>
						</div>
						<div className="col l6 m6 s6">
							<input type="submit" value="search" className="btn_start btn" />
						</div>
					</div>
				</form>
				{this.state.movieList === undefined && (
					<center>
						<div>
							<h5>Not found</h5>
						</div>
					</center>
				)}
				{this.state.movieList !== undefined && (
					<center>
						<div className="movie-list center" align="center">
							<MovieList movieList={this.state.movieList}></MovieList>
						</div>
					</center>
				)}
			</div>
		);
	}
}

export default Home;
