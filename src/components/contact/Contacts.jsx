import React, { useState } from "react";
import { SkyBlue } from "../../helpers/colors";
import Contact from "./Contact";

import notFoundGif from "../../assets/no-found.gif";

const Contacts = () => {
  // eslint-disable-next-line
  const [getContact, setContact] = useState([]);
  return (
    <>
      <section className="container">
        <button className="btn mt-3 mb-3" style={{ background: SkyBlue }}>
          Create New Contact <i className="fa fa-plus-circle mx-2"></i>
        </button>
      </section>

      <section className="container">
        {getContact > 0 ? (
          (c) => {
            c.map(<Contact />);
          }
        ) : (
          <img
            src={notFoundGif}
            alt="not found any contact"
            className="w-25 align-center"
          />
        )}
      </section>
    </>
  );
};

export default Contacts;
