import React from "react";

export default function Question({ no, question }) {
	return (
		<div>
			<h5 className="margin30">
				<span> Q {no}</span>
				{question}
			</h5>
		</div>
	);
}
