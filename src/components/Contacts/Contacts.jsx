import { SkyBlue } from "../../helpers/colors";
import { Contact, Spinner } from "../../components";

import notFoundGif from "../../assets/no-found.gif";

const Contacts = ({ contacts, loading }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container d-flex justify-content-center align-items-center mt-5">
          {contacts.length > 0 ? (
            contacts.map((c) => <Contact key={c.id} contact={c} />)
          ) : (
            <img
              src={notFoundGif}
              alt="not found any contact"
              className="w-25 mx-auto"
            />
          )}
        </section>
      )}

      <section className="container d-flex justify-content-center align-items-center mt-5">
        <button className="btn mt-3 mb-3" style={{ background: SkyBlue }}>
          Create New Contact <i className="fa fa-plus-circle mx-2"></i>
        </button>
      </section>
    </>
  );
};

export default Contacts;
