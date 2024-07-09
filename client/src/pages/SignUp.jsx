import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Section */}
        <div className="flex-1">
          {/* Logo and Title */}
          <Link to="/" className="font-bold dark:text-white text-4xl">
            {/* Logo text with gradient background */}
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 rounded-lg text-white">
              Tech
            </span>
            Blog
          </Link>
          {/* Description */}
          <p className="text-xl mt-3 font-bold dark:text-white">
            Welcome to Tech Blog.
          </p>
          <p className="text-sm mt-5">
            You can sign up with your Google account or with your email and
            password.
          </p>
        </div>

        {/* Right Section */}
        <div className=" flex-1">
          <div>
            {/* Sign Up Form */}
            <form className="flex flex-col gap-4">
              <div>
                {/* Username Field */}
                <Label value="Your username" />
                <TextInput type="text" placeholder="Username" id="username" />
              </div>
              <div>
                {/* Email Field */}
                <Label value="Your email" />
                <TextInput type="text" placeholder="Email" id="email" />
              </div>
              <div>
                {/* Password Field */}
                <Label value="Your password" />
                <TextInput type="text" placeholder="Password" id="password" />
              </div>
              {/* Submit Button */}
              <Button
                className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 rounded-lg text-white"
                type="submit"
              >
                Sign Up
              </Button>
            </form>

            {/* Sign In Link */}
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
