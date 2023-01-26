import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {

    return (
        <>
        <div className="container">
            <div className="card" style={{width: "18rem"}}>
				<div className="card-header">
					{props.name}
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{props.age}</li>
					<li className="list-group-item">{props.lucky_numbers}</li>
				</ul>
			    <div className="card-footer">
                    <p>{props.btn}</p>
                    {/* <Link to={props.url}>
					    <button className="btn btn-outline-primary">{props.first_name}</button>
                    </Link> */}
				</div>
			</div>
        </div>
    </>
    )
}