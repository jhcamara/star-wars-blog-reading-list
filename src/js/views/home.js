import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
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

      <div className="d-flex">
        <h3 className="text-warning align-self-center mt-5">Characters</h3>
      </div>

      <div className="cardWrapper d-flex justify-content-around mt-3">
        {store.people.map((value, i) => (
          <div key={i} className="card" Style={"width: 18rem"}>
            <img
              className="card-img-top"
              src={
                "https://starwars-visualguide.com/assets/img/characters/" +
                value.uid +
                ".jpg"
              }
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>
              <p className="card-text">Some quick example text .</p>
              <div className="d-flex justify-content-between align-items-bottom">
                <a href="#" className="btn btn-warning mb-1">
                  Learn more
                </a>
                <i className="fa fa-solid fa-heart mt-1"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VEHICLES */}

      <div className="d-flex">
        <h3 className="text-warning align-self-center mt-5">Vehicles</h3>
      </div>

      <div className="cardWrapper d-flex justify-content-around mt-3">
        {store.people.map((value, i) => (
          <div key={i} className="card" Style={"width: 18rem"}>
            <img
              className="card-img-top"
              src={
                "https://starwars-visualguide.com/assets/img/vehicles/" +
                value.uid +
                ".jpg"
              }
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>
              <p className="card-text">Some quick example text.</p>
              <div className="d-flex justify-content-between align-items-bottom">
                <a href="#" className="btn btn-warning mb-1">
                  Learn more
                </a>
                <i className="fa fa-solid fa-heart mt-1"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PLANETS */}

      <div className="d-flex">
        <h3 className="text-warning align-self-center mt-5">Planets</h3>
      </div>

      <div className="cardWrapper d-flex justify-content-around mt-3">
        {store.people.map((value, i) => (
          <div key={i} className="card" Style={"width: 18rem"}>
            <img
              className="card-img-top"
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                value.uid +
                ".jpg"
              }
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>
              <p className="card-text">Some quick example text.</p>
              <div className="d-flex justify-content-between align-items-bottom">
                <a href="#" className="btn btn-warning mb-1">
                  Learn more
                </a>
                <i className="fa fa-solid fa-heart mt-1"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="https://www.starwars.com/" className="btn btn-warning">
        Satisfy your geek cravings!
      </a>
    </div>
  );
};
