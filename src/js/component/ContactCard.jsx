import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from 'react-router-dom';

const history = () => {
  useHistory();
}

const ContactCard = () => {
  const { store, actions } = useContext(Context);
  console.log(store)
  

  function handleDelete(i) {
    console.log("handleDelete contact", i);
    actions.delete(i);
  }
  return (
    <div className="d-flex flex-column align-items-center">
      {store.contactList.map((contact, index) => (
        <div
          key={index}
          className="row card m-0 p-0 justify-content-between"          
        >
          <div className="col-md-4">
            <img
              src="https://www1.nyc.gov/assets/nycha/images/content/pages/contact-in-person.png"
              className="img-fluid rounded-start"              
              alt="..."
            ></img>
          </div>
          <div className="col-md-6 p-0">
            <div className="card-body p-0 m-1">
              <h5 className="card-title d-flex justify-content-start m-2">
                {contact.full_name}
              </h5>
              <div className="d-flex justify-content-start ">
                <p className="ms-3">{contact.address}</p>
              </div>
              <div className="d-flex justify-content-start ">
                <p className="ms-2">{contact.phone}</p>
              </div>
              <div className="d-flex justify-content-start ">                
                <p className="ms-2">{contact.email}</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-evenly m-5">
            <button className="btn btn-success m-2" onClick={()=> {
              history().push(`/AddContact/${contact.id}`)
            }}> 
            ✏            
            </button>
            <button className="btn btn-danger m-2" onClick={() => {actions.delete(index);}}>
              ❌              
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
