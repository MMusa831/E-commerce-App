import React from "react";
import Announce from "../Components/Announce";
import Categories from "../Components/Categories/Categories";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";


const Accueil = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />     
    </div>
  );
};

export default Accueil;
