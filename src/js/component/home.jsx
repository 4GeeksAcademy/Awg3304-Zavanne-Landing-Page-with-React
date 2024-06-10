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
	  <div className="card-container">
      <div className="d-flex flex-wrap justify-content-around p-4 m-1" style={{minHeight: "calc(100vh-100px)"}}>
        <Cards
        image="https://www.burgesspetcare.com/wp-content/uploads/2024/01/shutterstock_478281727-scaled-1.jpg"
        title="Schnauzer Companions"
        text="The Schnauzer is a breed of dog with a distinctive beard and eyebrows. They are known for their intelligence and loyalty."
        />
        <Cards
        image="https://www.tripsavvy.com/thmb/UOQP0NP_6fefZ2pfiuyATGqJBXA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-972523936-5c3f477d46e0fb0001ae3805.jpg"
        title="Ancient Ruins in the Riviera Maya"
        text="Explore the rich history of the Riviera Maya with ancient ruins that tell stories of the past civilizations. Discover the beauty and mystery of these archaeological wonders."
        />
        <Cards
        image="https://www.americasquarterly.org/wp-content/uploads/2018/10/Weavers_Colombia.jpg"
        title="Celebrating Latin American Heritage"
        text="Immerse yourself in the vibrant culture and traditions of Latin American native women. Explore their rich heritage, colorful traditions, and timeless beauty."
        />
        <Cards
        image="https://skift.com/wp-content/uploads/2022/06/GettyImages-1208049833-scaled-e1654782364566-1536x1024.jpg"
        title="The Majestic Taj Mahal"
        text="Behold the breathtaking beauty of the Taj Mahal, an iconic symbol of love and architectural marvel. Discover the history, romance, and grandeur of this UNESCO World Heritage Site."
        />
      </div>
	  </div>
      <Footer/>
    </div>
  );
};
export default Home;

