import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
// import { fa-heart } from '@fortawesome/free-solid-svg-icons';

export const PlanetBar = () => {

    const { store, actions } = useContext(Context);
    
  return (
    <div className="container">
      <div className="d-flex">
        <h3 className="text-warning align-self-center mt-5">Planets</h3>
      </div>

      <div className="cardWrapper row justify-content-start mt-3">
        {store.planets.map((value, i) => (
          <div key={i} className="card col-xs-4" Style={"width: 18rem"}>
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
              <h5 className="card-title mb-5">{value.name}</h5>
              
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
    </div>
  );
};
