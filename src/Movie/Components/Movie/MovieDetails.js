import React from "react";
import Axios from "axios";

class MovieDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = { movie: [], id: this.props.location.state.movie.imdbID };
		this.getData = this.getData.bind(this);
	}
	getData = async (id) => {
		const URL = `http://www.omdbapi.com/?apikey=fd334544&i=${id}`;
		const result = await Axios.get(URL);
		console.log(result);
		let movie = result.data;
		this.setState({ movie: movie });
	};
	render() {
		this.getData(this.state.id);
		const {
			Director,
			Genre,
			Plot,
			Poster,
			Production,
			Runtime,
			Title,
			imdbRating,
			imdbVotes,
		} = this.state.movie;

		return (
			<div className="card_detail center">
				<div className="row">
					<div className=" col l5  m12  s12 center">
						<img height="400px" src={Poster} alt="poster" />
					</div>
					<div className=" col l7  m12  s12 center details">
						<h3 className="title">{Title}</h3>
						<div className="row">
							<div className="col  l6 m6 s6 ">
								<span className="label">Genre : </span>
								{Genre}
							</div>

							<div className="col  l6 m6 s6">
								<span className="label">Runtime : </span> {Runtime}
							</div>
						</div>
						<div className="row">
							<div className="col  l6 m6 s6">
								<span className="label">Directed By : </span>
								{Director}
							</div>
							<div className="col  l6 m6 s6">
								<span className="label">Production : </span>
								{Production}
							</div>
						</div>

						<div className="row">
							<div className="col  l6 m6 s6">
								<span className="label">IMDB Rating </span>
								{imdbRating}
							</div>
							<div className="col  l6 m6 s6">
								<span className="label">IMDB Votes</span> {imdbVotes}
							</div>
						</div>
						<div className="row">
							<h3 className="title">Plot</h3>
							<div className="col l12"> {Plot}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieDetails;
