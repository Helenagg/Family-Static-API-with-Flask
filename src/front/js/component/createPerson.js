import React, { useEffect, useState } from "react";

export const CreatePerson = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [lnumbers, setLnumbers] = useState("");
    const [result, setResult] = useState([]);

    
        const create = () => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            var raw = JSON.stringify({
            "first_name": name,
            "age": age,
            "lucky_numbers": lnumbers
            });
    
            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
          
            fetch(`${process.env.BACKEND_URL}/api/family`, requestOptions)
            .then(response => response.json())
            .then(result => setResult(result))
            .catch(error => console.log('error', error));
        }

    console.log(result);

    return (
        <>
            <div className="container text-center mt-5 border border-1 border-primary p-3">
                <h2 className="text-primary">Create a new person</h2>
                <div className="container justify-content-center d-flex mt-5">
                    <div className="bg-light border p-4 text-center">
                        <input type="text" placeholder="Name"className="m-2" onChange={(event) => setName(event.target.value)}/>
                        <input type="text" placeholder="Age" className="m-2"onChange={(event) => setAge(event.target.value)}/>
                        <input type="text" placeholder="Lucky Numbers" className="m-2" onChange={(event) => setLnumbers(event.target.value)}/>
                        <div className="m-3">
                            <button className="btn btn-primary" onClick={create}>Create</button>
                        </div>
                        {result.ok ? (
                            <div className="alert alert-success" role="alert">
                                {result.message}</div>
                        ):(
                            <div className="alert alert-danger" role="alert">You must fill all the fields</div>
                        )}
                    </div>
                </div>
            </div>
        </>            
    )
}
