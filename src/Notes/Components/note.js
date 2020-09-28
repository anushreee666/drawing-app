import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
/*import ReactMarkdown from "react-markdown";*/

export default class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = { edit_disabled: true, name: this.props.name };
	}

	render() {
		return (
			<React.Fragment>
				<div className="row">
					<div className="col l9 m9 s9 ">
						<span className="heading">{this.state.name} </span>
					</div>
					<div className="col l1 m1 s1 ">
						<button
							className="edit"
							onClick={() => {
								this.setState({ edit_disabled: false });
							}}
						>
							<FaRegEdit></FaRegEdit>
						</button>
					</div>
					<div className="col l1  m1 s1">
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
				<div className="row">
					<div className="col l12 m12 s12 ">
						<div
							className="note-container"
							onMouseLeave={() => {
								this.setState({ edit_disabled: true });
							}}
						>
							<textarea
								onInput={() => {}}
								className="text-area "
								disabled={this.state.edit_disabled}
							></textarea>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
