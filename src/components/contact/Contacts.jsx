import { SkyBlue } from "../../helpers/colors";
import Contact from "./Contact";

import notFoundGif from "../../assets/no-found.gif";

const Contacts = ({ contacts }) => {
  
  return (
    <>
      <section className="container">
        <button className="btn mt-3 mb-3" style={{ background: SkyBlue }}>
          Create New Contact <i className="fa fa-plus-circle mx-2"></i>
        </button>
      </section>

      <section className="container">
        {contacts.length > 0 ? (
          contacts.map((c) => <Contact key={c.id} contact={c} />)
        ) : (
          <img
            src={notFoundGif}
            alt="not found any contact"
            className="w-25 align-center"
          />
        )}
      </section>
    </>
  );
};

export default Contacts;
