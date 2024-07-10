import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  // Conditionally hide the search form based on the current route
  const path = useLocation().pathname;
  const shouldShowSearch = path !== "/sign-up" && path !== "/sign-in"; // Updated conditional rendering

  return (
    <Navbar className="border-b-2">
      {/* Logo and Home link */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex items-center transition-transform transform hover:scale-105"
      >
        {/* Logo text with gradient background */}
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 rounded-lg text-white mr-2">
          Tech
        </span>
        Blog
      </Link>

      {/* Conditional rendering of search form */}
      {shouldShowSearch && (
        <form>
          <TextInput
            type="text"
            placeholder="Search here . ."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
      )}

      {/* Search button, displayed on small screens */}
      <Button className="w-12 h-10 lg:hidden transition-transform transform hover:scale-105">
        <AiOutlineSearch />
      </Button>

      {/* Container for additional buttons: dark mode toggle and sign-in */}
      <div className="flex gap-2 md:order-2">
        {/* Dark mode toggle button, displayed on small screens and up */}
        <Button
          className="w-12 h-10 hidden sm:inline transition-transform transform hover:scale-105"
          color="gray"
          pill
        >
          <FaMoon />
        </Button>

        {/* Sign-in button linking to the sign-in page */}
        <Link to="/sign-in">
          <Button
            outline
            className="bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 text-white outline-none transition-transform transform hover:scale-105"
          >
            Sign In
          </Button>
        </Link>

        {/* Navbar toggle button for small screens */}
        <Navbar.Toggle />
      </div>

      {/* Navbar menu items, collapsible on smaller screens */}
      <Navbar.Collapse>
        {/* Home link */}
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link
            to="/"
            className="transition-transform transform hover:scale-105 hover:text-indigo-600 dark:hover:text-white"
          >
            Home
          </Link>
        </Navbar.Link>

        {/* Projects link */}
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link
            to="/projects"
            className="transition-transform transform hover:scale-105 hover:text-indigo-600 dark:hover:text-white"
          >
            Projects
          </Link>
        </Navbar.Link>

        {/* About link */}
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link
            to="/about"
            className="transition-transform transform hover:scale-105 hover:text-indigo-600 dark:hover:text-white"
          >
            About
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
