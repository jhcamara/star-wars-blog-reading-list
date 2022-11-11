import React from "react";
import "../../styles/home.css";
// import { fa-heart } from '@fortawesome/free-solid-svg-icons';


export const Home = () => (
	<div className="text-center mt-5">
		<h1 className="text-light mb-5">I am your father!</h1>
    <div className="d-flex">
    <h3 className="text-warning align-self-left">Characters</h3>
    </div>
{/* ADDING FROM BOOSTRAP CARD LIST - NOT WORKING */}

<div className="cardWrapper d-flex justify-content-around mt-3">

		<div className="card" Style={"width: 18rem"}>
  <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZ206b-NadqcsiTY5cG7Xj9XAjyNae8EsBw&usqp=CAU" alt="Card image cap" />
         <div className="card-body">
           <h5 className="card-title">Lara Croft</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div className="d-flex justify-content-between align-items-bottom">
           <a href="#" className="btn btn-warning mb-1">Learn more</a>
           <i className="fa fa-solid fa-heart mt-1"></i>
           </div>
         </div>
	    </div>



{/* NEW CARD */}

<div className="card" Style={"width: 18rem"}>
  <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3N-A558deN3Wac1ESHpArAP1aY-YcDC0hYA&usqp=CAU" alt="Card image cap" />
         <div className="card-body">
           <h5 className="card-title">Frodo Baggins</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div className="d-flex justify-content-between align-items-bottom">
           <a href="#" className="btn btn-warning mb-1">Learn more</a>
           <i className="fa fa-solid fa-heart mt-1"></i>
           </div>
         </div>
	    </div>

<div className="card" Style={"width: 18rem"}>
  <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIxvlYeKAN-OpRTcn1wDWMjU07KxEEXUogQ&usqp=CAU" alt="Card image cap" />
         <div className="card-body">
           <h5 className="card-title">Wonder Woman</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div className="d-flex justify-content-between align-items-bottom">
           <a href="#" className="btn btn-warning mb-1">Learn more</a>
           <i className="fa fa-solid fa-heart mt-1"></i>
           </div>
         </div>
	    </div>

		

		<div className="card" Style={"width: 18rem"}>
  <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_L7FDbi6CRCDpsV1v6okcpzF4Uumz3u3HA&usqp=CAU" alt="Card image cap" />
         <div className="card-body">
           <h5 className="card-title">James Bond</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div className="d-flex justify-content-between align-items-bottom">
           <a href="#" className="btn btn-warning mb-1">Learn more</a>
           <i className="fa fa-solid fa-heart mt-1"></i>
           </div>
         </div>
	    </div>


		</div>
{/* ADDING FROM BOOSTRAP CARD LIST */}
		
		<a href="#" className="btn btn-warning">
			Satisfy your geek cravings!
		</a>
	</div>
);
