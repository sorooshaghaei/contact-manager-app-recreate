import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>Navbar</div>
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