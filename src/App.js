import { useState } from "react";
import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";

import {
  AddContact,
  Contacts,
  Navbar,
  EditContact,
  ViewContact,
} from "./components";

const App = () => {
  // eslint-disable-next-line
  const [getContact, setContact] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false); //for spinner
  return (
    <>
      <div className="App">
        <Navbar />

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
      </div>
    </>
  );
};

export default App;
