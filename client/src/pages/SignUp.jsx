import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            {/* Logo text with gradient background */}
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 rounded-lg text-white">
              Tech
            </span>
            Blog
          </Link>
          <p className="text-xl mt-3 font-bold dark:text-white ">
            Welcome to Tech Blog.
          </p>
          <p className="text-sm mt-5">
            You can sign up wih your google account or with your email and
            password
          </p>
        </div>
        <div className=" flex-1">
          {/*right */}
          <div>
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your username" />
                <TextInput type="text" placeholder="Username" id="username" />
              </div>
              <div>
                <Label value="Your email" />
                <TextInput type="text" placeholder="Email" id="email" />
              </div>
              <div>
                <Label value="Your password" />
                <TextInput type="text" placeholder="Password" id="password" />
              </div>
              <Button
                className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 rounded-lg text-white"
                type="submit"
              >
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account? </span>
              <Link to="/sign-in" className="text-blue-500">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
