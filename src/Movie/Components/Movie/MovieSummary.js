import React from "react";

export default function MovieSummary({ title, poster, year }) {
	return (
		<div className="row">
			<div className="col s12 m6 l4 center">
				<div className="card ">
					<div className="card-image">
						<img src={poster} style={{ borderRadius: "30px" }} alt="poster" />

						<h6
							className="btn-floating halfway-fab year"
							style={{
								width: "80px",
								borderRadius: "20px",
								fontSize: "15px",
							}}
						>
							{year}
						</h6>
					</div>
					<div className="card-content ">
						<h3 className="title">{title}</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
