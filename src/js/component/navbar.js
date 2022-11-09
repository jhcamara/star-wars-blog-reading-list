import React from "react";
import { Link } from "react-router-dom";
import pngwingcom from "../../img/pngwingcom.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 p-3">
			<Link to="/">
			<img className="swlogo" src={pngwingcom} />
			</Link>
			
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
