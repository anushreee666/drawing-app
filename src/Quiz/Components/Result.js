import React from "react";
import { Link } from "react-router-dom";

class Result extends React.Component {
	render() {
		return (
			<div className="container center">
				<h4>Result :</h4>
				<h6>Result could not be saved as sibling componenets </h6>{" "}
				<h6>- redux store required/ database not connected yet</h6>
				<Link to="./Quiz">
					<button className="btn">Re start </button>
				</Link>
			</div>
		);
	}
}

export default Result;
