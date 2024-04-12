import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {ProfilePage} from "./profilePage";
import PlaylistDropdown from "./playlistDropdown";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h3>Playlist Dropdown</h3>
			<PlaylistDropdown />
			<br/>
			<br/>
			<br/>
			<h3>Profile Page</h3>
			<ProfilePage />
		</div>
	);
};

export default Home;
