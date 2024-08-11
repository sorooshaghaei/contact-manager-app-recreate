import { useState } from "react";
import "./App.css";
import Contacts from "./components/contact/Contacts";
import Navbar from "./components/Navbar";

const App = () => {
  // eslint-disable-next-line
  const [getContact, setContact] = useState([]);
  return (
    <>
      <Navbar />
      <Contacts contacts={getContact} />
    </>
  );
};

export default App;
