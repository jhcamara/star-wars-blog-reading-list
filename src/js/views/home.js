import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { CharacterBar } from "../component/CharacterBar";
import { PlanetBar } from "../component/PlanetBar";
import { VehicleBar } from "../component/VehicleBar";
import { Context } from "../store/appContext";
// import { fa-heart } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <img
        className="img-fluid mb-4"
        src="https://cdna.artstation.com/p/assets/images/images/003/205/438/large/anderson-vieira-banner-starwars.jpg?1471027030"
      ></img>

      {/* CHARACTERS */}

      <CharacterBar />

      {/* VEHICLES */}
      <VehicleBar />

      {/* PLANETS */}

      <PlanetBar />

      <a href="https://www.starwars.com/" className="btn btn-warning">
        Satisfy your geek cravings!
      </a>
    </div>
  );
};
