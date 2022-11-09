import React from "react";
import "../../styles/home.css";


export const Home = () => (
	<div className="text-center mt-5 row">
		<h1 className="text-light">Star Wars Blog</h1>
{/* ADDING FROM BOOSTRAP CARD LIST - NOT WORKING */}
{/* 
		<div className="card" style="width: 18rem;">
  <img className="card-img-top" src="" alt="Card image cap" />
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-warning">Go somewhere</a>
         </div>
	    </div> */}

{/* ADDING FROM BOOSTRAP CARD LIST */}
		
		<a href="#" className="btn btn-warning">
			Satisfy your geek cravings!
		</a>
	</div>
);
