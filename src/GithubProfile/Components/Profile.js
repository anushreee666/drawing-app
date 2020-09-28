import React from "react";

function Profile(props) {
	var {
		id,
		avatar_url,
		bio,
		blog,
		company,
		created_at,
		email,
		followers,
		following,
		html_url,
		location,
		name,
		public_gists,
		public_repos,
	} = props.profile;

	return (
		<div className="card center">
			<div className="row">
				<div className=" col l3 m5 s12 center">
					<img src={avatar_url} alt="user" />
					<div>{id}</div>
				</div>
				<div className=" col l9 m7 s12">
					<div>
						<h4>{name}</h4>
					</div>

					<div>{bio}</div>
				</div>
			</div>
			<div className="row">
				<div className=" col l6  m6  s6 center">
					<h6>FOLLOWERS</h6>
					<div>{followers}</div>
				</div>
				<div className=" col l6  m6  s6 center">
					<h6>FOLLOWING</h6>
					<div>{following}</div>
				</div>
			</div>
			<div className="row">
				<div className=" col l6  m6  s6 center">
					<div>
						<span className="label">Email :</span> {email}
					</div>
					<div>
						<span className="label">location :</span> {location}
					</div>

					<div>
						<span className="label">Company :</span> {company}
					</div>
				</div>

				<div className=" col l6  m6 s6 center">
					<div>
						<span className="label">Blog :</span> <a href={blog}>{blog}</a>
					</div>
					<div>
						<span className="label">Public Gists : </span>
						{public_gists}
					</div>

					<div>
						<span className="label">Public Repos : </span>
						{public_repos}
					</div>
				</div>
			</div>
			<div className="row">
				<div className=" col l6  m6  s12 center">
					<div>
						Visit My git Hub profile: <a href={html_url}>{html_url}</a>{" "}
					</div>
				</div>

				<div className=" col l6  m6  s12 center">
					<div> Profile created at: {created_at}</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
