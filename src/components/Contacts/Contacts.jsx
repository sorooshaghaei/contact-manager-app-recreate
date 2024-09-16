// Contacts.js
import React from "react";
import { Contact, Spinner } from "../../components";
import notFoundGif from "../../assets/no-found.gif";

const Contacts = ({ contacts, loading, groups }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="mt-5">
          {contacts.length > 0 ? (
            <div className="container">
              <div className="row">
                {contacts.map((c) => (
                  <div className="col-12 col-md-6 col-lg-6 mb-4" key={c.id}>
                    <Contact contact={c} groups={groups} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <img
              src={notFoundGif}
              alt="not found any contact"
              className="w-25 mx-auto"
            />
          )}
        </section>
      )}

      <section className="d-flex justify-content-center align-items-center mt-5">
        <button className="btn mt-3 mb-3">
          Create New Contact <i className="fa fa-plus-circle mx-2"></i>
        </button>
      </section>
    </>
  );
};

export default Contacts;
