import React from "react";
import { GiTimeBomb } from "react-icons/gi";

setInterval(Countdown, 1000);
function Countdown() {
	var countDownDate = new Date("1 Jan 2021");
	const currentDate = new Date();
	var distance = countDownDate - currentDate;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
}

function Home() {
	return (
		<div className="container center">
			<GiTimeBomb className="icon"></GiTimeBomb>
			<h2>Countdown Timer</h2>
			<h4>Countdown to a really Special Date. End of 2020</h4>

			<table>
				<tbody className="timer">
					<tr className="center numbers">
						<td id="days"></td>
						<td>
							<span> : </span>
						</td>
						<td id="hours"></td>
						<td>
							<span> : </span>
						</td>
						<td id="minutes"></td>
						<td>
							<span> : </span>
						</td>
						<td id="seconds"></td>
					</tr>
					<tr className="center">
						<td colSpan="2" className="shift-right">
							Days
						</td>
						<td colSpan="2" className="shift-right">
							Hours{" "}
						</td>
						<td colSpan="2" className="shift-right">
							Minutes{" "}
						</td>
						<td>Seconds</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Home;
