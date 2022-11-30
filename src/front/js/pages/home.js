import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const view = () => {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
		  
		  fetch("https://3001-4geeksacade-reactflaskh-2s43cxuip9x.ws-eu77.gitpod.io/api/family", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	}

	return (
		<>
			<div className="text-center mt-5">
				<h1>Family!!</h1>
				<button onClick={view}>View Family</button>
				<div></div>
			</div>
		</>
	);
};
