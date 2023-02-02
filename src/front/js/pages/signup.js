import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { element } from "prop-types";
import { Card } from "../component/card";
import { CreatePerson } from "../component/createPerson";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState([])
    const [error, setError] = useState("")

    const signup = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": email,
        "password": password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${process.env.BACKEND_URL}/api/signup`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.ok === true) {
                navigate("/")
            }
        })
        .catch(error => console.log('error', error));

    }

    console.log(result)
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