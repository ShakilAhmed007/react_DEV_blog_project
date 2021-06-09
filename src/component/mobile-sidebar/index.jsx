import React from "react";
import LiItem from "../li-item";

function MobileSidebar() {
  return (
    <div className="bg-white w-60 h-screen fixed shadow">
      <div className="heading relative">
        <h3 className="text-black font-bold text-lg p-4">DEV Community</h3>
        <div className="close-btn absolute top-0 right-0">
            <button className='py-2 px-3 bg-gray-600'>X</button>
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
  );
}

export default MobileSidebar;
