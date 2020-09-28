import React from "react";
import { AiFillDelete } from "react-icons/ai";

export default class Tak extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.name };
	}
	render() {
		return (
			<React.Fragment>
				<div className="row task">
					<div className="col l10 m10 s10 ">
						<span className="heading">{this.state.name}</span>
					</div>
					<div className="col l2 m2 s2 ">
						<button
							className="delete"
							onClick={() => {
								this.props.del(this.state.name);
							}}
						>
							<AiFillDelete></AiFillDelete>
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
