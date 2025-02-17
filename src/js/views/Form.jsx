import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";



const initialState = {
    "full_name": "",
    "email": "",
    "agenda_slug": "alxander89",
    "address": "",
    "phone": ""
}

export const Form = () => {
    
    const { store, actions } = useContext(Context)
    const [contact, setContact] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await actions.addContact(contact)
        console.log(response)
        if (response == 201) {
            setContact(initialState)
            
        }
        // console.log(response)

    }

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="m-2 d-flex justify-content-center">
                    <h1>Add a new contact: </h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Full Name" name="full_name" value={contact.full_name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Enter Address" name="address" value={contact.address} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example@email.com" name="email" value={contact.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="phone" className="form-control" id="phone" placeholder="+584149286826" name="phone" value={contact.phone} onChange={handleChange} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success w-100">Send</button>
                    </div>

                </form >
                <Link className="mt-4" to="/">
                    Go back to contact list
                </Link>
            </div>
        </div>
    )
}