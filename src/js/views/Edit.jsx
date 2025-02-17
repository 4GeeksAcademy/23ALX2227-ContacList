import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";


export const Edit = () => {
    
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({});
    const { id } = useParams();

    const [editedContact, setEditedContact] = useState({
        address: "",
        agenda_slug: "alxander89",
        email: "",
        full_name: "",
        phone: "",
    })

    const findContact = () => {
        let result = store.contacts.find((item) => item.id == id)
        setEditedContact(result)
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault()
        let response = await actions.editContact(id, editedContact)
        console.log(response)
        if (response == 201) {
            setEditedContact({
                address: "",
                agenda_slug: "alxander89",
                email: "",
                full_name: "",
                phone: "",
            })
        }       
        // console.log(response)
    }

    const handleChange = (e) => {
        setEditedContact({
            ...editedContact,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        findContact()
    }, [store.contacts])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="mb-3">
                    <h1>Edit Contact data </h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Full Name" name="full_name" value={editedContact?.full_name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Enter Address" name="address" value={editedContact?.address} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example@email.com" name="email" value={editedContact?.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="phone" className="form-control" id="phone" placeholder="+584149286826" name="phone" value={editedContact?.phone} onChange={handleChange} />
                    </div>
                    <div className="d-flex justify-content-center">                    
                        <button type="submit" className="btn btn-success">Send</button>                    
                    </div>

                </form >                
                    <Link className="mt-4" to="/">
                        Go back to contact list
                    </Link>                
            </div>
        </div>
    )
}