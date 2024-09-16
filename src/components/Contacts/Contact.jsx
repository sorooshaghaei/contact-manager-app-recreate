// Contact.js
import React from "react";
import { DarkBlue, LightBlue, Orange } from "../../helpers/colors";

const Contact = ({ contact, groups }) => {
  // Find the group name based on the group ID
  const groupName = groups.find(group => group.id === parseInt(contact.groups))?.name || "Unknown";

  return (
    <div
      className="card d-flex flex-column flex-md-row align-items-center"
      style={{ background: DarkBlue }}
    >
      <div className="col-3 d-flex justify-content-center align-items-center">
        {/* Contact Image */}
        <img
          src="https://via.placeholder.com/200"
          className="img-fluid p-3"
          alt="contact pic"
        />
      </div>

      <div className="col-7">
        {/* Contact Info */}
        <ul className="list-group p-3">
          <li className="list-group-item" style={{ background: LightBlue }}>
            <strong>Name:</strong> {contact.fullName}
          </li>
          <li className="list-group-item" style={{ background: LightBlue }}>
            <strong>Email:</strong> {contact.email}
          </li>
          <li className="list-group-item" style={{ background: LightBlue }}>
            <strong>Phone:</strong> {contact.phone_Number}
          </li>
          <li className="list-group-item" style={{ background: LightBlue }}>
            <strong>Address:</strong> {contact.address}
          </li>
          <li className="list-group-item" style={{ background: LightBlue }}>
            <strong>Relationship:</strong> {groupName}
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="col-2 d-grid justify-content-center align-items-center">
        <button className="btn mb-2" style={{ background: Orange }}>
          <i className="fa fa-trash"></i>
        </button>
        <button className="btn mb-2" style={{ background: Orange }}>
          <i className="fa fa-pencil"></i>
        </button>
        <button className="btn mb-2" style={{ background: Orange }}>
          <i className="fa fa-eye"></i>
        </button>
      </div>
    </div>
  );
};

export default Contact;
