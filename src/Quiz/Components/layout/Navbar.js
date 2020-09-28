import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import { CgLogOff } from "react-icons/cg";

class Navbar extends React.Component {
	// console.log("props", props.isEmpty);
	componentDidMount() {
		document.addEventListener("DOMContentLoaded", function () {
			var elems = document.querySelectorAll(".dropdown-trigger");
			M.Dropdown.init(elems, {});
		});
	}

	render() {
		return (
			<nav className=" Nav-wrapper grey darken-3">
				<div className="container">
					<Link to="../" className="brand-logo">
						Quiz App
					</Link>

					<button
						style={{
							marginTop: "5px",
							backgroundColor: "transparent",
							fontSize: "50px",
							border: "0px",
							color: "white",
						}}
						className="dropdown-trigger right"
						href="#"
						data-target="dropdown1"
					>
						<CgLogOff></CgLogOff>
					</button>
					<ul id="dropdown1" className="dropdown-content">
						<li>
							<Link to="/signIn" className="brand-logo">
								SignIn
							</Link>
						</li>
						<li>
							<Link to="/signUp" className="brand-logo">
								SignUp
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
