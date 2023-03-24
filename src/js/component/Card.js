import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";



export const Card = () => {

  


	return (
        <div className="card" Style={"width: 18rem"}>
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZ206b-NadqcsiTY5cG7Xj9XAjyNae8EsBw&usqp=CAU"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{i.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-between align-items-bottom">
            <a href="#" className="btn btn-warning mb-1">
              Learn more
            </a>
            <i className="fa fa-solid fa-heart mt-1"></i>
          </div>
        </div>
      </div>
	);
};
