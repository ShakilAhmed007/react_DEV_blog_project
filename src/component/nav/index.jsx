import React, { useState } from "react";
import logo from "../images/logo/logo.png";
import LiItem from "../li-item";

function NavBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div>
      <div className="px-4 lg:px-10 mx-auto bg-white fixed w-full shadow">
        <div className=" flex flex-row py-2 items-center">
          <button
            href=""
            onClick={() => setShowSideBar(true)}
            className="md:hidden menu-icon mr-3 focus:outline-none"
          >
            <img
              className="w-6"
              src="https://img.icons8.com/ios-filled/24/000000/menu--v1.png"
            />
          </button>

          <div className="logo">
            <img className="w-12" src={logo} alt="logo" />
          </div>
          <div className="search-box">
            <input
              className=" hidden md:block border border-gray-400 bg-gray-100 w-96 rounded mx-5  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-opacity-0"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div className=" flex sign-in ml-auto">
            <button
              className="search-icon self-center md:hidden mx-2 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setShowSearch(!showSearch)}
            >
              <img
                className="w-6"
                src="https://img.icons8.com/fluent-systems-regular/50/000000/search.png"
              />
            </button>
            <a
              href="#"
              className="hidden md:inline mx-1 py-2 px-5 rounded text-blue-700 text-bold hover:bg-gray-100"
            >
              Login
            </a>
            <a
              href="#"
              className="py-2 px-4 rounded bg-blue-700 text-white font-medium hover:bg-blue-800"
            >
              Create Account
            </a>
          </div>
        </div>
        {showSearch ? (
          <div className="mobile-search-box md:hidden">
            <input
              class=" w-full bg-gray-100 text-black border border-gray-400 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-opacity-0"
              type="search"
              placeholder="Search..."
            />
          </div>
        ) : (
          ""
        )}
      </div>
      {/* mobile side menu */}

      {showSideBar ? (
        <div className="bg-white w-60 h-screen fixed shadow">
          <div className="heading relative">
            <h3 className="text-black font-bold text-lg p-4">DEV Community</h3>
            <div className="close-btn absolute top-0 right-0">
              <button
                onClick={() => setShowSideBar(false)}
                className="py-2 px-3 bg-gray-600 rounded text-white md:hidden"
              >
                X
              </button>
            </div>
          </div>
          <hr />
          <div className="p-4 nav-items">
            <LiItem icon="/assets/icons/home.svg" itemName="Home" url="/" />

            <LiItem icon="/assets/icons/home.svg" itemName="Home" url="/" />

            <LiItem icon="/assets/icons/home.svg" itemName="Home" url="/" />

            <LiItem icon="/assets/icons/home.svg" itemName="Home" url="/" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
