import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import SignIn from "../LoginModule/auth/SignIn";
import SignUp from "../LoginModule/auth/SignUp";
import Home from "./Components/Home";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/SignIn" component={SignIn}></Route>
				<Route path="/SignUp" component={SignUp}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
