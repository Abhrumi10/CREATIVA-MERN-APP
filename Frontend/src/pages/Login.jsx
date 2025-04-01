import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import { LoadingAnimation } from "../components/Loading";
import { PinData } from "../context/PinContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, btnLoading } = UserData();
  const navigate = useNavigate();

  const { fetchPins } = PinData();

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(email, password, navigate, fetchPins);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src="https://img.freepik.com/premium-vector/letter-c-butterfly-pink-logo_715895-518.jpg"
            alt="Creativa"
            className="h-12"
          />
        </div>
        <h2 className="text-2xl font-serif text-center text-black mb-6">
          Login To CREATIVA
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-serif font-semibold text-pink-700 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="common-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold font-serif text-pink-700 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="common-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="common-btn" disabled={btnLoading}>
            {btnLoading ? <LoadingAnimation /> : "LOGIN"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-pink-300 "></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 to-pink-300 ">
              <span className= "text-pink-700 font-serif font-semibold">
              OR
              </span>
              </span>
            </div>
          </div>

          <div className="mt-4 text-center font-serif text-sm">
            <span>
              Not on Creativa yet? 
              <Link
                to="/register"
                className="text-pinterest hover:underline font-serif font-semibold text-pink-700"
              >
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;