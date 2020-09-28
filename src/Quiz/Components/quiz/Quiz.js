import React from "react";
import Question from "./Question";
import Answer from "./Answer";
import { Link } from "react-router-dom";

export default class QuestionList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { marks: 0 };
		this.calculateMarks = this.calculateMarks.bind(this);
	}
	calculateMarks(x) {
		const newMarks = this.state.marks + x;
		console.log("new marks", newMarks);
		this.setState({ marks: newMarks });
	}

	render() {
		console.log(this.state.marks);
		return (
			<div>
				<h2 className="center"> Quiz</h2>
				<h6 className="center">
					NOTE* : Once you Check Answer you can not Select Again
				</h6>
				<h5 className="current_score">
					Current Score : {this.state.marks * 10}{" "}
				</h5>
				<Question
					no={1}
					question={" Select the nearest star from the Earth ?"}
				></Question>
				<Answer
					op1={"Sun"}
					op2={"Venus"}
					op3={"Mars"}
					op4={"Caponixa"}
					ans={"Sun"}
					calculateMarks={this.calculateMarks}
				></Answer>
				<Question no={2} question={" how many lions are present ?"}></Question>
				<Answer
					op1={"dog"}
					op2={"cat"}
					op3={"lion"}
					op4={"mouse"}
					ans={"cat"}
					calculateMarks={this.calculateMarks}
				></Answer>
				<Question no={3} question={" how many lions are present ?"}></Question>
				<Answer
					op1={1}
					op2={4}
					op3={7}
					op4={0}
					ans={1}
					calculateMarks={this.calculateMarks}
				></Answer>
				<Question no={4} question={" how many lions are present ?"}></Question>
				<Answer
					op1={"dog"}
					op2={"cat"}
					op3={"lion"}
					op4={"mouse"}
					ans={"cat"}
					calculateMarks={this.calculateMarks}
				></Answer>
				<div className="center">
					<Link to="./Result">
						<button className="btn size_mid btn"> Show Result</button>
					</Link>
				</div>
			</div>
		);
	}
}
