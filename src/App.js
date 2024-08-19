import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import {
  Contacts,
  Navbar,
  // EditContact,
  // AddContact,
  // ViewContact,
  // Contact,
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
          <Route
            path="/"
            element={<Contacts contacts={getContact} loading={loading} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
