import React from "react";

const SearchContact = () => {
  return (
    <>
      <form className="d-flex m-2" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn" style={{ background: "#B197FC" }} type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>
  );
};

export default SearchContact;
