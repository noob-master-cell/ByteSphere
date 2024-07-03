import React from "react";
// Importing necessary components from Flowbite-react library for UI elements
import { Navbar, TextInput, Button } from "flowbite-react";
// Importing Link and useLocation from react-router-dom for navigation and routing
import { Link, useLocation } from "react-router-dom";
// Importing icons from react-icons library for search and dark mode toggle
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

// Header component definition
const Header = () => {
  // useLocation hook provides the current URL path
  const path = useLocation().pathname;

  return (
    // Navbar component acts as the main container for the header
    <Navbar className="border-b-2">
      {/* Logo and Home link */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        {/* Logo text with gradient background */}
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 rounded-lg text-white">
          Tech
        </span>
        Blog
      </Link>

      {/* Search form, only displayed on large screens */}
      <form>
        <TextInput
          type="text"
          placeholder="Search here . ."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      {/* Search button, displayed on small screens */}
      <Button className="w-12 h-10 lg:hidden" color="gray">
        <AiOutlineSearch />
      </Button>

      {/* Container for additional buttons: dark mode toggle and sign-in */}
      <div className="flex gap-2 md:order-2">
        {/* Dark mode toggle button, displayed on small screens and up */}
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        {/* Sign-in button linking to the sign-in page */}
        <Link to="/sign-in">
          <Button className="w-20 h-10" gradientDuoTone="purpleToBlue">
            Sign In
          </Button>
        </Link>

        {/* Navbar toggle button for small screens */}
        <Navbar.Toggle />
      </div>

      {/* Navbar menu items, collapsible on smaller screens */}
      <Navbar.Collapse>
        {/* Home link, marked active if the current path is "/" */}
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>

        {/* Projects link, marked active if the current path is "/projects" */}
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>

        {/* About link, marked active if the current path is "/about" */}
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
