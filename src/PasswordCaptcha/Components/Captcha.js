import React from "react";
import Recaptcha from "react-recaptcha";
class Captcha extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVerfied: false,
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
		this.verifyCallback = this.verifyCallback.bind(this);
	}
	onSubmit() {
		if (!this.state.isVerfied) {
			alert("Please verify that you are human");
		} else {
			alert("you have been verified");
		}
	}
	recaptchaLoaded() {
		console.log(" captcha loaded");
	}
	verifyCallback(response) {
		if (response) {
			this.setState({ isVerfied: true });
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className="center">
					<h5>Captcha</h5>
					<p> note: unable to get site key for localhost</p>
					<center>
						<Recaptcha
							sitekey="6LcYyM0ZAAAAAD_xJYRddc09SO4BoGhOoTbe0gaw"
							render="explicit"
							onloadCallback={this.recaptchaLoaded}
							verifyCallback={this.verifyCallback}
						/>
					</center>

					<button type="submit" className="btn">
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default Captcha;
