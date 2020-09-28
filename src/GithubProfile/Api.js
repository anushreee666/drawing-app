const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const params = "?client_id=${id}&client_secret=${sec}";

function getErrorMsg(message, username) {
	if (message === "Not Found") {
		return `${username} doesn't exist`;
	}

	return message;
}

function getProfile(username) {
	fetch(`https://api.github.com/users/${username}`) //${params} appended with username so that not rate limited by github
		.then((res) => res.json())
		.then((profile) => {
			if (profile.message) {
				throw new Error(getErrorMsg(profile.message, username));
			}

			return profile;
		});
}
