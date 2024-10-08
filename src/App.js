// App.js
import { useEffect, useState } from "react";
import "./App.css";
import { Router, Navbar } from "./components";
import { getAllContacts, getAllGroups } from "./services/contactService";

const App = () => {
  const [getContacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false); // for spinner
  const [getGroups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // getting contacts and groups
        const responseContacts = await getAllContacts();
        const responseGroups = await getAllGroups();

        setContacts(responseContacts.data);
        setGroups(responseGroups.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Router contacts={getContacts} loading={loading} groups={getGroups} />
    </div>
  );
};

export default App;
