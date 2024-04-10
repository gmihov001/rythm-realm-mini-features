import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {ProfilePage} from "./profilePage";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<ProfilePage />
		</div>
	);
};

export default Home;
