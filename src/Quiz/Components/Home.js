import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<table>
					<tbody>
						<tr>
							<td>
								<h3 className="center">Lets start quiz</h3>
							</td>
						</tr>
						<tr>
							<td align="center" className="center">
								<Link to="./Quiz">
									<button className="btn_start btn">start </button>
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Home;
