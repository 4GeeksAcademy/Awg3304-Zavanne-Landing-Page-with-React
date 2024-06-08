import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import Navbar from "./Navbar";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar/>
			<Jumbotron/>
			<Cards/>
			<Footer/>
		</div>
	);
};

export default Home;

