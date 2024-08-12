import { useState } from "react";
import "./App.css";
import {
  Contacts,
  Navbar,
  EditContact,
  AddContact,
  ViewContact,
  Contact,
} from "./components";

const App = () => {
  // eslint-disable-next-line
  const [getContact, setContact] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false); //for spinner
  return (
    <>
      <Navbar />
      <Contacts contacts={getContact} loading={loading} />
    </>
  );
};

export default App;
