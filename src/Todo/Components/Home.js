import React from "react";
import Task from "./Task";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { task: "", taskList: [] };
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}
	onChange = (e) => {
		this.setState({ task: e.target.value });
	};
	onClick = (e) => {
		e.preventDefault();
		this.setState({
			taskList: [
				...this.state.taskList,
				<Task
					name={this.state.task}
					del={this.deleteTask}
					key={this.state.task}
				></Task>,
			],
			task: "",
		});
	};
	deleteTask(taskname) {
		const taskList = this.state.taskList.filter((task) => {
			return task.key !== taskname;
		});
		this.setState({ taskList });

		/*	console.log("taks deleted :", taskname);*/
	}

	render() {
		return (
			<div className="container center">
				<h4 className="heading">Todo App</h4>
				<div className="todo-container">
					<div className="row">
						<div className="col l6">
							<input
								type="text"
								placeholder="Enter Task"
								onChange={this.onChange}
								style={{ color: "#ffffff", width: "30vw" }}
								value={this.state.task}
							></input>
						</div>
						<div className="col l6">
							<input
								type="submit"
								value="Add Task"
								className="btn_start btn"
								onClick={this.onClick}
							/>
						</div>
					</div>
					<div>
						{this.state.taskList.map((task, index) => (
							<div className="card" key={index}>
								{task}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
