import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AddContact, Contacts, EditContact, ViewContact } from "../components";

const Router = ({ contacts, loading}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={contacts} loading={loading}  />}
        />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:contactId" element={<ViewContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </>
  );
};

export default Router;
