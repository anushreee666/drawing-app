import React from "react";

export default function RecipeSummary({ label, image, healthLabels, source }) {
	return (
		<div className="row">
			<div className="col s12 m6 l4 center">
				<div className="card ">
					<div className="card-image">
						<img src={image} alt={label} style={{ borderRadius: "30px" }} />
						<span className="card-title">
							<h3 style={{ color: "white", fontSize: "25px" }}>{label}</h3>
						</span>
						<a
							className="btn-floating halfway-fab yellow source"
							style={{
								width: "80px",
								borderRadius: "20px",
								fontSize: "15px",
							}}
							href={`https:\\${source}.com`}
						>
							{source}
						</a>
					</div>
					<div className="card-content ">
						<p style={{ color: "black", fontSize: "15px" }}>
							{healthLabels.map((i, index) => (
								<span key={index}>{i + "  "}</span>
							))}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
