// Importing necessary modules from React and third-party libraries
import React, { useState } from "react";
import PropTypes from "prop-types";
import Transition from "../utils/Transition";

// Functional component representing a dropdown menu
function Dropdown({ children, title }) {
  // State to manage the open/close state of the dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Rendering the dropdown menu
  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)} // Handling mouse enter event to open the dropdown
      onMouseLeave={() => setDropdownOpen(false)} // Handling mouse leave event to close the dropdown
      onFocus={() => setDropdownOpen(true)} // Handling focus event to open the dropdown
      onBlur={() => setDropdownOpen(false)} // Handling blur event to close the dropdown
    >
      {/* Dropdown trigger anchor */}
      <a
        className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
        href="#0"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()} // Preventing the default link behavior
      >
        {title} {/* Displaying the title of the dropdown */}
        <svg
          className="w-3 h-3 fill-current text-gray-500 cursor-pointer ml-1 flex-shrink-0"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </a>
      
      {/* Transition component for animating dropdown visibility */}
      <Transition
        show={dropdownOpen}
        tag="ul"
        className="origin-top-right absolute top-full right-0 w-40 bg-white py-2 ml-4 rounded shadow-lg"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        {children} {/* Content of the dropdown */}
      </Transition>
    </li>
  );
}

// Prop type validation for the Dropdown component
Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  title: PropTypes.string.isRequired, // Title of the dropdown (required)
};

// Exporting the Dropdown component as the default export
export default Dropdown;