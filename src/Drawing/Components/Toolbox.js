import React from "react";
import { IoMdRefresh } from "react-icons/io";
class Toolbox extends React.Component {
	render() {
		return (
			<div className="toolbox center grey darken-3">
				<div className="row">
					<div className="col l2 m2 s2">
						<label className="brand-logo">Drawing App</label>
					</div>
					<div className="col l2 m3 s3">
						<div className="switch">
							<div> Eraser</div>
							<label>
								<input type="checkbox" onChange={this.props.onChangeSwitch} />
								<span className="lever"></span>
							</label>
						</div>
					</div>

					<div className="col l3 m3 s3">
						<div> {this.props.size}</div>
						<input
							type="range"
							min="1"
							max="100"
							value={this.props.size}
							onChange={this.props.onChangeSize}
						/>
					</div>
					<div className="col l2 m2 s2">
						<div> Color </div>
						<input
							type="color"
							value={this.props.color}
							onChange={this.props.onChangeColor}
						></input>
					</div>

					<div className="col l2 m1 s1">
						<IoMdRefresh
							className="refresh"
							onClick={() => {
								window.location.reload();
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default Toolbox;
