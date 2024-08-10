import React from "react";
import { DarkBlue, LightBlue, Orange, SkyBlue } from "../../helpers/colors";

const Contacts = () => {
  return (
    <>
      <section className="container">
        <button className="btn mt-3 mb-3" style={{ background: SkyBlue }}>
          Create New Contact <i className="fa fa-plus-circle mx-2"></i>
        </button>
      </section>

      <section className="container">
        <div className="card col-12 col-md-6 " style={{ background: DarkBlue }}>
          <div className="row g-0 p-3">
            <div className="d-flex col-12 col-sm-4 col-md-4 justify-content-center justify-content-sm-start">
              <img
                src="https://via.placeholder.com/200"
                className="img-fluid rounded-start p-3"
                alt="contact pic"
              />
            </div>
            <div className="col-12 col-sm-8 col-md-8 d-flex ">
              <div className="card-body">
                <ul className="list-group">
                  <li
                    className="list-group-item"
                    style={{ background: LightBlue }}
                  >
                    Name:
                  </li>
                  <li
                    className="list-group-item"
                    style={{ background: LightBlue }}
                  >
                    Email:
                  </li>
                  <li
                    className="list-group-item"
                    style={{ background: LightBlue }}
                  >
                    Phone Number:
                  </li>
                  <li
                    className="list-group-item"
                    style={{ background: LightBlue }}
                  >
                    Address:
                  </li>
                  <li
                    className="list-group-item"
                    style={{ background: LightBlue }}
                  >
                    Relationship:
                  </li>
                </ul>
              </div>
              <div className="d-flex flex-column my-4">
                <button
                  className="btn my-2 "
                  style={{ background: Orange }}
                >
                  <i className="fa fa-trash"></i>
                </button>
                <button
                  className="btn my-2"
                  style={{ background: Orange }}
                >
                  <i className="fa fa-pencil"></i>
                </button>
                <button
                  className="btn my-2"
                  style={{ background: Orange }}
                >
                  <i className="fa fa-eye"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
