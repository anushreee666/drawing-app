import React from "react";
import { Link } from "react-router-dom";
import RecipeSummary from "./Recipe/RecipeSummary";

export default function RecipeList({ recipeList }) {
	if (recipeList) {
		return (
			recipeList.length !== 0 &&
			recipeList.map((i) => (
				<Link
					to={{
						pathname: "/recipe/" + i.recipe.label,
						state: { recipe: i.recipe },
					}}
					key={i.recipe.label}
				>
					<RecipeSummary
						label={i.recipe.label}
						image={i.recipe.image}
						source={i.recipe.source}
						healthLabels={i.recipe.healthLabels}
					></RecipeSummary>
				</Link>
			))
		);
	} else return null;
}
