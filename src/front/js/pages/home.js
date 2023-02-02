import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { element } from "prop-types";
import { Card } from "../component/card";
import { CreatePerson } from "../component/createPerson";
import { Link } from "react-router-dom";

export const Home = (props) => {
	const { store, actions } = useContext(Context);
	const [result, setResult] = useState([])

	
	return (
		<>
			<div className="container text-center mt-5 border border-1 border-primary">
				<h1 className="text-primary">LOGIN</h1>
			</div>
		</>
	);
};
