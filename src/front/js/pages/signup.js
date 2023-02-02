import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { element } from "prop-types";
import { Card } from "../component/card";
import { CreatePerson } from "../component/createPerson";
import { Link } from "react-router-dom";

export const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = () => {

    }
    return (
        <>
			<div className="container text-center mt-5 border border-1 border-primary p-3">
                <div className="container p-3">
				<h1 className="text-primary">SIGNUP</h1>
                <div className="row justify-content-md-center border border-1 border-light p-5 m-5">
                    <div className="col">
                        <input className="m-3" type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/><br/>
                        <input className="m-3" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/><br/>
                        <button className="btn btn-primary mt-2" onClick={signup}>Signup</button>
                    </div>
                    <div className="col">
                        <img src="https://st2.depositphotos.com/3837271/6941/i/950/depositphotos_69417709-stock-photo-text-sign-up.jpg" style={{height: 300}}/>
                    </div>
                </div>
                </div>
			</div>
		</>
    )
}