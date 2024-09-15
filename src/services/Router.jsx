import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AddContact, Contacts, EditContact, ViewContact } from "../components";

const Router = () => {
  // eslint-disable-next-line
  const [getContact, setContact] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false); //for spinner

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={getContact} loading={loading} />}
        />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:contactId" element={<ViewContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </>
  );
};

export default Router;
