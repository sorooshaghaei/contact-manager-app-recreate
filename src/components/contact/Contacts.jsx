import React from "react";
import { SkyBlue } from "../../helpers/colors";
import Contact from "./Contact";

const Contacts = () => {
  return (
    <>
      <section className="container">
        <button className="btn mt-3 mb-3" style={{ background: SkyBlue }}>
          Create New Contact <i className="fa fa-plus-circle mx-2"></i>
        </button>
      </section>

      <section className="container">
        <Contact />
      </section>
    </>
  );
};

export default Contacts;
