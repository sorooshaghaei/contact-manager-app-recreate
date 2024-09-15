import { useEffect, useState } from "react";
import "./App.css";
import { Router, Navbar } from "./components";
import axios from "axios";

const App = () => {
  const [getContacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false); // for spinner
  const [getGroups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseContacts = await axios.get(
          "http://localhost:9000/contacts"
        );
        const responseGroups = await axios.get("http://localhost:9000/groups");
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
      <Router contacts={getContacts} groups={getGroups} loading={loading} />
    </div>
  );
};

export default App;
