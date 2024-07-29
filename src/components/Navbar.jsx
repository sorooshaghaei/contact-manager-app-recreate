import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-dark bg-dark">
        <div className=" container">
          <div className="row w-100">
            <div className="col">
              <i
                className="m-3 fa fa-address-book"
                style={{ color: "#B197FC" }}
              ></i>
              <span style={{ color: "#B197FC" }}>contact manager</span>
            </div>

            <div className="col">
              <form className="d-flex m-2" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn"
                  style={{ background: "#B197FC" }}
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

// Export (export const Navbar):
// Imported using exact name in curly braces: import { Navbar } from './Navbar';.
// Allows multiple exports from the same file.

// Default Export (export default Navbar):
// Imported without curly braces: import Navbar from './Navbar';.
// Only one default export per file, can be imported with any name.
