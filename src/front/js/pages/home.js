import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { element } from "prop-types";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [result, setResult] = useState([])

	const view = () => {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
		  
		  fetch(`${process.env.BACKEND_URL}/api/family`, requestOptions)
			.then(response => response.json())
			.then(result =>setResult(result))
			.catch(error => console.log('error', error));
	}
	console.log(result)
	return (
		<>
			<div className="text-center mt-5">
				<h1>Family!!</h1>
				<button onClick={view}>View Family</button>
				{result.map((element) => {
					return (
						<div className="container">
							<p>{element.first_name}</p>
						</div>
					)
				})}
				<div></div>
			</div>
		</>
	);
};
