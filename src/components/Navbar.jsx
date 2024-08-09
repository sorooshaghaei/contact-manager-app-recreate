import React from "react";
import SearchContact from "./contact/SearchContact";
import { DarkBlue, Orange } from "../helpers/colors";

const Navbar = () => {
  return (
    <>
      <div
        className="navbar navbar-expand-lg"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          background: DarkBlue,
        }}
      >
        <div className=" container">
          <div className="row w-100">
            <div className="col">
              <i
                className="m-3 fa fa-address-book"
                style={{ color: Orange }}
              ></i>
              <span style={{ color: Orange }}><b>contact manager</b></span>
            </div>

            <div className="col">
              <SearchContact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

// Export (export const Navbar):
// Imported using exact name in curly braces: import { Navbar } from './Navbar';.
// Allows multiple exports from the same file.

// Default Export (export default Navbar):
// Imported without curly braces: import Navbar from './Navbar';.
// Only one default export per file, can be imported with any name.
