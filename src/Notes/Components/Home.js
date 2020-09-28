import React from "react";
import Note from "./note";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", notes: [] };
		this.addNewNote = this.addNewNote.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	onChange = (e) => {
		this.setState({ name: e.target.value });
	};
	addNewNote() {
		this.setState({
			notes: [
				...this.state.notes,
				<Note
					name={this.state.name}
					del={this.deleteNote}
					key={this.state.name}
				/>,
			],
			name: "",
		});
	}
	deleteNote(n) {
		const notes = this.state.notes.filter((name) => {
			console.log(name);
			return name.key !== n;
		});
		this.setState({ notes });

		console.log("note deleted", n);
	}

	render() {
		return (
			<div className=" note-area center">
				<div className="row">
					<div className="col l12">
						<h4 className="heading">Create Notes</h4>
						<input
							type="text"
							placeholder="Enter Notes Heading"
							onChange={this.onChange}
							style={{ color: "#000000", width: "30vw" }}
							value={this.state.name}
							className="input-note-name"
						></input>
						<button className="btn" onClick={this.addNewNote}>
							+
						</button>
					</div>
				</div>
				<div className="flex" id="notes">
					{this.state.notes.map((note, index) => (
						<div className="card" key={index}>
							{note}
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Home;
