import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <div
        className="navbar navbar-expand-lg bg-dark"
        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
      >
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
              <Search />
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
