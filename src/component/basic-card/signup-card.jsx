import React from "react";


function signupCard(props) {
  return (
    <div className="p-5 bg-white border border-gray-300 rounded-lg mb-8">
      <div className="content">
        <h3 className=" text-xl font-bold">
          <span>
            <a href="" className="text-blue-600">
              DEV Community
            </a>
          </span>{" "}
          is a community of 634,247 amazing developers{" "}
        </h3>
        <p className="text-lg text-gray-500">
          We're a place where coders share, stay up-to-date and grow their
          careers.{" "}
        </p>
      </div>
      <div className="login-action my-2">
        <button className="p-2 my-1 bg-blue-600 rounded-lg text-white w-full hover:bg-blue-700">
          Create new account
        </button>
        <button className="p-2 my-1 bg-white rounded-lg text-blue-600 w-full hover:bg-gray-100">
          Login
        </button>
      </div>
    </div>
  );
}

export default signupCard;
