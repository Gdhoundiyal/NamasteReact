import { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    setEmail("");
    setPassword("");
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <div className="flex justify-center items-center h-[89vh]  bg-Background2 ">
      <form
        onSubmit={handleSubmit}
        className=" bg-white p-10 rounded shadow-md w-[50vw]">
        <h2 className=" text-xl  mb-2 ">Log In</h2>
        <p className=" text-sm mb-4 ">
          Or{" "}
          <Link to={"/signup"}>
            <a className=" text-sm  text-Primary  cursor-pointer">
              {" "}
              Create an Account
            </a>
          </Link>
        </p>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700  mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-Background2 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700  mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-Background2 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full border bg-blue-500 py-2 px-4 hover:bg-blue-600 transition duration-300 p-3 bg-Primary text-white rounded-lg mt-3">
          Log In
        </button>
        <div className="text-sm mt-3">
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </div>
      </form>
    </div>
  );
};

export default LogIn;
