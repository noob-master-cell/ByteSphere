import React, { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value.trim() });

    // Clear email and password errors when user types again
    if (id === "email") {
      setEmailError("");
    } else if (id === "password") {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is empty
    if (!formData.email) {
      setEmailError("Email is required.");
      return dispatch(signInFailure("Email is required."));
    } else if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return dispatch(signInFailure("Invalid email format."));
    } else {
      setEmailError(""); // Clear email error if valid
    }

    // Check if password is empty
    if (!formData.password) {
      setPasswordError("Password is required.");
      return dispatch(signInFailure("Password is required."));
    } else {
      setPasswordError(""); // Clear password error if valid
    }

    // Proceed with sign-in process
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.message === "User not found") {
          setEmailError("User not found.");
        } else if (data.message === "Invalid password") {
          setPasswordError("Invalid password.");
        } else {
          dispatch(signInFailure("An error occurred. Please try again."));
        }
        return dispatch(signInFailure(data.message));
      }

      dispatch(signInSuccess(data.rest));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure("An error occurred. Please try again."));
    }
  };

  return (
    <div className="min-h-screen mt-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            {/* Logo text with gradient background */}
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 rounded-lg text-white">
              Tech
            </span>
            Blog
          </Link>
          <p className="text-xl mt-3 font-bold dark:text-white">
            Welcome to Tech Blog.
          </p>
          <p className="text-sm mt-5">
            You can sign in with your email and password or with a Google
            account.
          </p>
        </div>

        <div className="flex-1">
          <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label value="Your email" />
                <TextInput
                  type="text"
                  placeholder="Email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Your password" />
                <TextInput
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              {emailError && (
                <Alert className="mt-1 mb-2" color="failure">
                  {emailError}
                </Alert>
              )}
              {passwordError && (
                <Alert className="mt-1 mb-2" color="failure">
                  {passwordError}
                </Alert>
              )}
              <Button
                className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 rounded-lg text-white transition-transform transform hover:scale-105"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="'pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>New to tech blog?</span>
              <Link to="/sign-up" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </div>

            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
