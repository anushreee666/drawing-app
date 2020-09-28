import React from "react";
import Canvas from "./Canvas";
import Toolbox from "./Toolbox";
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { size: 2, color: "#000000", eraser: false, canvas: null };
		this.onChangeSize = this.onChangeSize.bind(this);
		this.onChangeColor = this.onChangeColor.bind(this);
		this.onChangeSwitch = this.onChangeSwitch.bind(this);
		this.getCanvas = this.getCanvas.bind(this);
		this.onSave = this.onSave.bind(this);
	}
	onChangeSize(e) {
		this.setState({ size: e.target.value });
	}
	onChangeColor(e) {
		this.setState({ color: e.target.value });
	}
	onChangeSwitch(e) {
		if (e.target.checked) {
			this.setState({ eraser: true });
		} else {
			this.setState({ eraser: false });
		}
	}
	getCanvas(canvas) {
		this.setState({ canvas });
		console.log("cavas", canvas);
	}
	onSave(e) {
		console.log("save callled");
		var dataURL = this.state.canvas.toDataURL("image/png");
		console.log(e.target.href);
		e.target.href = dataURL;
	}

	render() {
		return (
			<React.Fragment>
				<Toolbox
					onChangeSize={this.onChangeSize}
					size={this.state.size}
					color={this.state.color}
					onChangeColor={this.onChangeColor}
					onChangeSwitch={this.onChangeSwitch}
					onSave={this.onSave}
				></Toolbox>
				<Canvas
					size={this.state.size}
					color={this.state.color}
					eraser={this.state.eraser}
					getCanvas={this.getCanvas}
				></Canvas>
			</React.Fragment>
		);
	}
}

export default Home;
