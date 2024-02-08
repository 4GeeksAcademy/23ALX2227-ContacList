import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/agendaHomePage.css";

export const AgendaHomePage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light  rounded-bottom-1 mb-1 ">
        <span className="navbar-brand mb-1 "></span>
        <div className="ml-auto">
          <Link to="/agenda_form">
            <button className="btn btn-success me-3 p-2">
              Add new contact
            </button>
          </Link>
        </div>
      </nav>
      <div>
        {store.agenda.length < 1 ? (
          <h1 className="noContatsMsg">No contacts found ⚠️</h1>
        ) : (
          <ul>
            {store.agenda.map((ele, key) => (
              <li className="border row" key={key}>
                <div className=" d-flex col-lg-3 col-md-4 col-sm-5 userImgContainer">
                  <img
                    src="https://picsum.photos/300/300"
                    alt="User Image"
                    className="userImg"
                  ></img>{" "}
                </div>

                <div className="col-md-8 col-sm-6 col-lg-7 infoContainer">
                  <div className="infoContainer">
                    <h3>{ele.full_name}</h3>
                    <div className="fw-semibold text-secondary m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                      <p>{ele.address}</p>
                    </div>
                    <div className=" text-secondary m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                    <p>
                      {`(${ele.phone.slice(0, 3)}) ${ele.phone.slice(
                        3,
                        6
                      )}-${ele.phone.slice(6)}`}
                    </p>  
                    </div>
                    <div className="text-secondary m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                    </svg>
                      <p>{ele.email}</p>
                    </div>
                  </div>
                </div>

                <div className=" col-lg-2 col-md-3 col-sm-6 d-flex">
                  <button
                    type="button"
                    className="btn btn-primary m-2 p-2"
                    data-bs-toggle="modal"
                    data-bs-target={`#editUser${key}`}
                  >Edit</button>
                  <button
                    type="button"
                    className="btn btn-danger m-2 p-2"
                    data-bs-toggle="modal"
                    data-bs-target={`#deleteUser${key}`}
                  >Delete</button>
                </div>

                <div
                  className="modal fade"
                  id={`editUser${key}`}
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Edit your user!
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          onClick={() => location.reload(true)}
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                              type="text"
                              placeholder="Full name"
                              className="form-control"
                              defaultValue={ele.full_name}
                              onChange={(event) =>
                                actions.setName(event.target.value)
                              }
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              placeholder="Enter email"
                              className="form-control"
                              defaultValue={ele.email}
                              onChange={(event) =>
                                actions.setEmail(event.target.value)
                              }
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                              placeholder="Enter phone"
                              className="form-control"
                              defaultValue={ele.phone}
                              onChange={(event) =>
                                actions.setPhone(event.target.value)
                              }
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                              type="text"
                              placeholder="Enter address"
                              className="form-control"
                              defaultValue={ele.address}
                              onChange={(event) =>
                                actions.setAddress(event.target.value)
                              }
                              required
                            />
                          </div>

                          <div className="d-flex">
                            <button
                              type="button"
                              className="btn btn-secondary w-50 "
                              data-bs-dismiss="modal"
                              onClick={() => location.reload(true)}
                            >
                              No
                            </button>
                            <button
                              onClick={() => actions.editUser(ele, key)}
                              className="btn btn-primary w-50"
                            >
                              save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target={`deleteUser${key}`}
                >
                  Delete
                </button> */}
                <div
                  className="modal fade"
                  id={`deleteUser${key}`}
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5">Are you sure?</h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close">                          
                        </button>
                      </div>
                      <div className="modal-body">
                        If you delete this thing the entire universe will go
                        down!
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Oh no!
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => actions.deleteUser(ele.id)}
                        >
                          Yes baby!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}     
            
          </ul>
        )}
      </div>
    </div>
  );
};

// Button trigger modal
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>

// Modal
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
