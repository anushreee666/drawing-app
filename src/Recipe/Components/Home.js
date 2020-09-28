import React from "react";
import Axios from "axios";
import RecipeList from "./RecipeList";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { item: "", itemList: [] };
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.getData = this.getData.bind(this);
	}
	onChange = (e) => {
		this.setState({ item: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.getData(this.state.item);
	};
	getData = async (Item) => {
		const APP_ID = "5ad0a634";
		const APP_KEY = "bf4eb88f33066bdb4d40b4bf0f808fb3	";
		const URL = `https://api.edamam.com/search?q=${Item}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
		const result = await Axios.get(URL);
		let recipeList = result.data.hits;
		this.setState({ itemList: recipeList });
	};

	render() {
		return (
			<div className="container center">
				<form onSubmit={this.onSubmit}>
					<h3>Lets search for Recipes </h3>
					<div className="row">
						<div className="col l6 m6 s6">
							<input
								type="text"
								placeholder="Type the name of food item"
								onChange={this.onChange}
								className="input-recipe"
							></input>
						</div>
						<div className="col l6 m6 s6">
							<input type="submit" value="search" className="btn_start btn" />
						</div>
					</div>
				</form>

				{this.state.itemList.length !== 0 && (
					<div className=" recipeList-container">
						<RecipeList recipeList={this.state.itemList}></RecipeList>
					</div>
				)}
			</div>
		);
	}
}

export default Home;
