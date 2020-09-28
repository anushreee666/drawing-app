import React from "react";
import Password from "./Password";
import Captcha from "./Captcha";
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { size: 2, color: "#000000", eraser: false, canvas: null };
	}

	render() {
		return (
			<React.Fragment>
				<h3 className="center"> Password and Captcha Generator</h3>
				<Password></Password>
				<Captcha></Captcha>
			</React.Fragment>
		);
	}
}

export default Home;
