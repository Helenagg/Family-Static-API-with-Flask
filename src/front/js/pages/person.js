import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "../component/card";

export const Person = (props) => {

    const params = useParams();
    const [result, setResult] = useState([]);

    useEffect (() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        //   fetch(`${process.env.BACKEND_URL}/api/family`+params.idPerson, requestOptions)
            fetch(`${process.env.BACKEND_URL}/api/family/`+params.id, requestOptions)
            .then(response => response.json())
            .then(result => setResult(result))
            .catch(error => console.log('error', error));
    }, [])
    
    const deletePerson = () => {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`${process.env.BACKEND_URL}/api/family/`+params.id, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div className="container text-center d-flex mt-5" style={{width: "100rem"}}>
                <Card
                    name={result.Person?.first_name+" "+result.Person?.last_name}
                    age={"Age: "+result.Person?.age}
                    lucky_numbers={"Lucky_numbers: "+result.Person?.lucky_numbers}
                    first_name= "Return"
                    btn={
                    <>
                    <Link to={"/"}>
					    	<button className="btn btn-outline-primary m-2">Return</button>
                    </Link>
                    <Link to={"/"}>
                        <button className="btn btn-primary" onClick={deletePerson}>Delete Person</button>
                    </Link>
                    </>}
                />
            </div>
        </>
    )
}