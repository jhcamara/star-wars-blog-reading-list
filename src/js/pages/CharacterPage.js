import React from "react";

export const Character = () => {

    const { store, actions } = useContext(Context);
  
    return (
      <div className="text-center mt-5">
        <img
          className="img-fluid mb-4"
          src="https://cdna.artstation.com/p/assets/images/images/003/205/438/large/anderson-vieira-banner-starwars.jpg?1471027030"
        ></img>
        <div className="d-flex">
          <h3 className="text-warning align-self-center">Characters</h3>
        </div>
  
  
       
        <div className="cardWrapper d-flex justify-content-around mt-3">
  
        {store.people.map((value, i) => (
        <div key={i} className="card" Style={"width: 18rem"}>
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZ206b-NadqcsiTY5cG7Xj9XAjyNae8EsBw&usqp=CAU"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
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
          ))}
  
        </div>
      
  
        <a href="https://www.starwars.com/" className="btn btn-warning">
          Satisfy your geek cravings!
        </a>
      </div>
    );
  };
  