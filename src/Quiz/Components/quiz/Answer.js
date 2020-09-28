import React from "react";

export default class Answer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.op1,
			correct: "",
			shouldDisable: false,
		};
		this.onRadioChange = this.onRadioChange.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
	}
	onRadioChange(e) {
		this.setState({ value: e.target.value });
	}
	checkAnswer() {
		if (this.state.value === this.props.ans) {
			this.setState({ correct: "Correct", shouldDisable: true });
			this.props.calculateMarks(1);
		} else {
			this.setState({ correct: "Incorrect", shouldDisable: true });
			this.props.calculateMarks(0);
		}
	}

	render() {
		return (
			<div>
				<table className="answer">
					<tbody>
						<tr>
							<td>
								<label>
									<input
										className="with-gap"
										type="radio"
										onChange={this.onRadioChange}
										checked={this.state.value === this.props.op1}
										value={this.props.op1}
										disabled={this.state.shouldDisable}
									/>
									<span>{this.props.op1}</span>
								</label>
							</td>
							<td>
								<label>
									<input
										className="with-gap"
										type="radio"
										onChange={this.onRadioChange}
										checked={this.state.value === this.props.op2}
										value={this.props.op2}
										disabled={this.state.shouldDisable}
									/>
									<span>{this.props.op2}</span>
								</label>
							</td>
						</tr>
						<tr>
							<td>
								<label>
									<input
										className="with-gap"
										type="radio"
										onChange={this.onRadioChange}
										checked={this.state.value === this.props.op3}
										value={this.props.op3}
										disabled={this.state.shouldDisable}
									/>
									<span>{this.props.op3}</span>
								</label>
							</td>
							<td>
								<label>
									<input
										className="with-gap"
										type="radio"
										onChange={this.onRadioChange}
										checked={this.state.value === this.props.op4}
										value={this.props.op4}
										disabled={this.state.shouldDisable}
									/>
									<span>{this.props.op4}</span>
								</label>
							</td>
						</tr>

						<tr className="border_bottom">
							<td colSpan="2">
								<button
									className="btn btn_check_ans"
									onClick={this.checkAnswer}
								>
									Check Answer
								</button>
								<h6>{this.state.correct}</h6>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
