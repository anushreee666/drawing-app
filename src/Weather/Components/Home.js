import React from "react";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { query: "", weather: [] };
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.getData = this.getData.bind(this);
		this.dateBuilder = this.dateBuilder.bind(this);
	}
	onChange = (e) => {
		this.setState({ query: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.getData(this.state.query);
	};
	getData = async (query) => {
		const APP_KEY = "9ad31deb8f063b3373666a2824f08181";
		const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APP_KEY}`;

		const resp = await fetch(URL, { origin: "cors" });
		const respData = await resp.json();

		this.setState({ weather: respData, query: "" });
		/*console.log(respData);*/
	};

	dateBuilder(d) {
		let months = [
			"January",
			"February",
			"March ",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		let days = [
			"Sunday",
			"Monday",
			"Teusday",
			"Wednesday",
			"Thrusday",
			"Friday",
			"Saturday",
		];
		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	}

	render() {
		return (
			<div
				className={
					typeof this.state.weather.main != "undefined" // if temp > 20 warm bg else cold bg
						? this.state.weather.main.temp - 274 > 20
							? "container  warm  "
							: "container   "
						: "container "
				}
			>
				<div className="gradient">
					<h4 className="logo">Weather App</h4>
					<form onSubmit={this.onSubmit}>
						<div className="row center">
							<div className="col l6 m6 s6">
								<input
									type="text"
									placeholder="Enter Location"
									onChange={this.onChange}
									style={{ color: "#ffffff", width: "30vw" }}
								></input>
							</div>
							<div className="col l6 m6 s6">
								<input type="submit" value="search" className="btn_start btn" />
							</div>
						</div>
					</form>

					{typeof this.state.weather.main != "undefined" ? (
						<div>
							<div className="location-box center">
								<div className="location">
									{this.state.weather.name}, {this.state.weather.sys.country}
								</div>
								<div className="date">{this.dateBuilder(new Date())}</div>
							</div>

							<div className=" weather-box center">
								<div className="temp ">
									{Math.round(this.state.weather.main.temp - 273.15)}°C
								</div>
								<div className="weather">
									<img
										src={`https://openweathermap.org/img/w/${this.state.weather.weather[0].icon}.png`}
										alt="icon"
									/>
									{this.state.weather.weather[0].main}
								</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default Home;
