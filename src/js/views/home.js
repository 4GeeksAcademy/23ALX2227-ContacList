import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, actions } = useContext(Context)
	const { contacts } = store

	return (
		<div>
			<div className="container">
				<div className="mt-5 row justify-content-center">
					{contacts.map((contact) => {
						return (

							<div key={contact.id} className="border">
								<div className="row d-flex justify-content-evenly">
									<div className="col-md-2 mt-3 mb-3">
										<img src="https://picsum.photos/150" className="rounded-circle shadow-4-strong border border-dark" alt="..." />
									</div>
									<div className="col-md-3 mt-2">
										<div className="card-body ">
											<h5 className="fw-bold card-title">{contact.full_name}</h5>
											<p className="card-text text-secondary p-0 m-0 ms-1">{contact.address}</p>
											<p className="card-text text-secondary p-0 m-0 ms-1">{contact.phone}</p>
											<p className="card-text text-secondary p-0 m-0 ms-1">{contact.email}</p>
										</div>
									</div>
									<div className=" col-md-3 d-flex flex-column  align-items-center">
										<div className="mt-3 mb-5">
											<Link to={`/Edit/${contact.id}`}>
												<button>✏</button>
											</Link>
											<button type="button" onClick={() => actions.deleteContact(contact.id)} className="mt-5 ms-3">❌</button>
										</div>

									</div>
								</div>
							</div>
						)
					})}
					
				</div>
			</div>
		</div>
	)

};