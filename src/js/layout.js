import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";
import { Home } from "./views/Home.js";
import { Footer } from "./component/Footer.jsx";
import { AddContact } from "./views/AddContact.jsx";
import { EditContact } from "./views/EditContact.jsx";
import injectContext from "./store/appContext.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addcontact" element={<AddContact />} />
            <Route path="/editcontact" element={<EditContact />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>          
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);