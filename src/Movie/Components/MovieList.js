import React from "react";
import { Link } from "react-router-dom";

import MovieSummary from "./Movie/MovieSummary";
/*import Answer from "./Recipe/RecipeDetails";
import { Link } from "react-router-dom";*/

export default function MovieList({ movieList }) {
	if (movieList) {
		console.log(movieList);
		return (
			movieList.length !== 0 &&
			movieList.map((movie) => (
				<Link
					to={{
						pathname: "/movie/" + movie.Title,
						state: { movie: movie },
					}}
					key={movie.imbdID}
				>
					<MovieSummary
						title={movie.Title}
						poster={movie.Poster}
						year={movie.Year}
					></MovieSummary>
				</Link>
			))
		);
	} else return null;
}
