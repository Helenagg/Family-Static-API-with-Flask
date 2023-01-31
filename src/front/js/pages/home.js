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
				<CreatePerson/>
				<button className="btn btn-outline-primary mt-5" onClick={view}>View Family</button>
				<div className="container text-center d-flex mt-5">
				{result.Family?.map((element, index) => {
					return (
						<>
							<Card
								name={element.first_name+" "+element.last_name}
								age={"Age: "+element.age}
								lucky_numbers={"Lucky_numbers: "+element.lucky_numbers}
								first_name={"View "+element.first_name}
								btn=<Link to={"/person/"+(element.id)}>
					    			<button className="btn btn-outline-primary">{"View "+element.first_name}</button>
                    			</Link>
				
							/>
						</>
					)
				})}
				</div>
				<div className="container text-center mt-5">
					
					{/* <Card
						name="Create a new person:"
					/> */}
				</div>
			</div>
		</>
	);
};
