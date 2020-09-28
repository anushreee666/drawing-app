import React from "react";
class Canvas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDrawing: false,
			contextRef: null,
			canvasRef: null,
		};
		this.contextRef = React.createRef(null);
		this.canvasRef = React.createRef(null);

		this.startDrawing = this.startDrawing.bind(this);
		this.finishDrawing = this.finishDrawing.bind(this);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		const canvas = this.canvasRef.current;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.style.width = `${window.innerWidth}px`;
		canvas.style.height = `${window.innerHeight}px`;

		const context = canvas.getContext("2d");

		context.scale(1, 1);
		context.lineCap = "round";
		context.strokeStyle = "black";

		context.lineWidth = this.props.size;
		this.contextRef.current = context;
		this.props.getCanvas(canvas);
	}

	startDrawing = ({ nativeEvent }) => {
		if (nativeEvent.type === "mousedown") {
			const { offsetX, offsetY } = nativeEvent;
			this.contextRef.current.beginPath();
			this.contextRef.current.moveTo(offsetX, offsetY);
		} else if (nativeEvent.type === "touchstart") {
			const { clientX, clientY } = nativeEvent.targetTouches[0];
			this.contextRef.current.beginPath();
			this.contextRef.current.moveTo(clientX, clientY - 43);
		}

		this.setState({ isDrawing: true });
	};

	finishDrawing = () => {
		this.contextRef.current.closePath();
		this.setState({ isDrawing: false });
	};

	draw = ({ nativeEvent }) => {
		if (!this.state.isDrawing) {
			return;
		}
		if (nativeEvent.type === "mousemove") {
			const { offsetX, offsetY } = nativeEvent;
			this.contextRef.current.lineTo(offsetX, offsetY);
		} else if (nativeEvent.type === "touchmove") {
			const { clientX, clientY } = nativeEvent.targetTouches[0];
			this.contextRef.current.lineTo(clientX, clientY - 43);
		}

		this.contextRef.current.lineWidth = this.props.size;
		if (this.props.eraser) {
			this.contextRef.current.strokeStyle = "white";
		} else {
			this.contextRef.current.strokeStyle = this.props.color;
		}

		this.contextRef.current.stroke();
	};
	render() {
		return (
			<canvas
				onMouseDown={this.startDrawing}
				onMouseUp={this.finishDrawing}
				onMouseMove={this.draw}
				onTouchStart={this.startDrawing}
				onTouchMove={this.draw}
				onTouchEnd={this.finishDrawing}
				ref={this.canvasRef}
			></canvas>
		);
	}
}

export default Canvas;
