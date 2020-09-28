import React from "react";

import { AiFillCopy } from "react-icons/ai";
class Toolbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			length: 10,
			upperCase: false,
			lowerCase: false,
			symbols: false,
			numbers: false,
			password: "",
		};
		this.onChange = this.onChange.bind(this);
		this.generatePassword = this.generatePassword.bind(this);
		this.getfunc = this.getfunc.bind(this);
		this.copy = this.copy.bind(this);
	}
	onChange(e) {
		if (e.target.name === "length") {
			this.setState({ [e.target.name]: e.target.value });
		} else this.setState({ [e.target.name]: e.target.checked });
	}
	getfunc(type) {
		return type[Math.floor(Math.random() * type.length)];
	}
	generatePassword() {
		const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const lowerCase = "abcdefghijklmnopqrstuvwxyz";
		const numbers = "0123456789";
		const symbols = "!@#$%^&*()_+-=:;/?<>";

		const n = this.state.length;
		var pass = "";
		for (var i = 0; i < n; i++) {
			if (this.state.upperCase && pass.length < n) {
				pass += this.getfunc(upperCase);
			}
			if (this.state.lowerCase && pass.length < n) {
				pass += this.getfunc(lowerCase);
			}
			if (this.state.symbols && pass.length < n) {
				pass += this.getfunc(symbols);
			}
			if (this.state.numbers && pass.length < n) {
				pass += this.getfunc(numbers);
			}
			if (pass.length >= n) {
				break;
			}
		}

		this.setState({ password: pass });
	}
	copy() {
		var copyText = document.getElementById("password-generated");
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		document.execCommand("copy");
		alert("Password Copied: " + copyText.value);
	}

	render() {
		return (
			<div className="password  grey darken-4">
				<div className="pass-heading">Password Generator</div>

				<div className="inner-div">
					<div className="length">
						<span> Password Length </span>
						<input
							type="number"
							min="4"
							max="40"
							name="length"
							onChange={this.onChange}
							value={this.state.length}
							style={{
								width: "36px", //style writen in input and span for checkbox, becuz unable to override from css file
								height: "20px",
								backgroundColor: "white",
								marginLeft: "45px",
							}}
						></input>
					</div>
					<div className="letter">
						<span> Include Upper Case Letters</span>
						<label>
							<input
								type="checkbox"
								className="filled-in "
								name="upperCase"
								onChange={this.onChange}
								checked={this.state.upperCase}
							/>
							<span
								style={{
									fontSize: "12px",
									marginLeft: "0px",
									paddingLeft: "27px",
								}}
							>
								eg: A B C
							</span>
						</label>
					</div>

					<div className="letter">
						<span> Include Lower Case Letters</span>
						<label>
							<input
								type="checkbox"
								className="filled-in "
								name="lowerCase"
								onChange={this.onChange}
								checked={this.state.lowerCase}
							/>
							<span
								style={{
									fontSize: "12px",
									marginLeft: "0px",
									paddingLeft: "27px",
								}}
							>
								eg: a b c
							</span>
						</label>
					</div>
					<div className="symbol">
						<span> Include Symbols</span>
						<label>
							<input
								type="checkbox"
								className="filled-in "
								checked={this.state.symbols}
								name="symbols"
								onChange={this.onChange}
							/>
							<span
								style={{
									fontSize: "12px",
									marginLeft: "0px",
									paddingLeft: "27px",
								}}
							>
								eg: ! @ #
							</span>
						</label>
					</div>
					<div className="number">
						<span> Include Numbers</span>
						<label>
							<input
								type="checkbox"
								className="filled-in"
								checked={this.state.numbers}
								name="numbers"
								onChange={this.onChange}
							/>
							<span
								style={{
									fontSize: "12px",
									marginLeft: "0px",
									paddingLeft: "27px",
								}}
							>
								eg: 0 1 2
							</span>
						</label>
					</div>

					<div className="center">
						<button className="btn" onClick={this.generatePassword}>
							Generate Password
						</button>
					</div>
					<div className="pass-generated">
						<input
							type="text"
							style={{
								width: "165px",
								height: "20px",
								backgroundColor: "white",
							}}
							defaultValue={this.state.password}
							id="password-generated"
						></input>

						<AiFillCopy className="copy" onClick={this.copy}></AiFillCopy>
					</div>
				</div>
			</div>
		);
	}
}
export default Toolbox;
