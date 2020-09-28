import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import SignIn from "../LoginModule/auth/SignIn";
import SignUp from "../LoginModule/auth/SignUp";
import Home from "./Components/Home";

import Navbar from "./Components/layout/Navbar";
import MovieDetails from "./Components/Movie/MovieDetails";

function App() {
	return (
		<BrowserRouter>
			<Navbar></Navbar>

			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/SignIn" component={SignIn}></Route>
				<Route path="/SignUp" component={SignUp}></Route>
				<Route path="/movie/:Title" component={MovieDetails}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
