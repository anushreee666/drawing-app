import React from "react";

import { MdTimer } from "react-icons/md";

function RecipeDetails(props) {
	const { recipe } = props.location.state;
	var {
		calories,
		cautions,
		dietLabels,
		healthLabels,
		image,
		ingredients,
		label,
		source,
		totalTime,
		totalWeight,
	} = recipe;
	totalWeight = totalWeight.toFixed(2);
	calories = calories.toFixed(2);

	return (
		<div className="card_detail center">
			<div className="row">
				<div className=" col l5  m12  s12 center">
					<img src={image} height="300px" alt={label} />
				</div>
				<div className=" col l7 m12 s12">
					<div className="row">
						<div className="col l12">
							<h2>{label}</h2>
						</div>
					</div>
					<div className="row">
						<div className="col l6 m6 s6">
							<MdTimer className="icon" />
							<h5>Total Cook Time : {totalTime} mins</h5>
						</div>
						<div className="col l6 m6 s6">
							<h4 className="source">{source}</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className=" col l2 m4 s6">
					<h5>Diet Labels</h5>
					{dietLabels.map((i, index) => (
						<span key={index}>{i + "  "}</span>
					))}
				</div>
				<div className=" col l2 m4 s6">
					<h5>Calories</h5>
					{calories}
				</div>
				<div className=" col l2 m4 s6">
					<h5>Total Weight</h5>
					{totalWeight}
				</div>
				<div className=" col l2 m6 s6 ">
					<h5>Cautions </h5>
					{cautions.map((i, index) => (
						<span key={index}>{i + "  "}</span>
					))}
				</div>

				<div className=" col l4 m6 s12">
					<h5>Health Labels</h5>
					{healthLabels.map((i, index) => (
						<span key={index}>{i + "  "}</span>
					))}
				</div>
			</div>

			<div className="row  center">
				<h3> Ingredients Required</h3>
				<div className=" col l12 m12 s12">
					{ingredients.map((i, index) => (
						<h6 key={index}>{i.text + " "}</h6>
					))}
				</div>
			</div>
		</div>
	);
}

export default RecipeDetails;
