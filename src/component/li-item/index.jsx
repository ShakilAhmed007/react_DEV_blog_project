import React from "react";

function LiItem(props) {
  return (
    <div>
      <a
        href={props.url}
        className="flex hover:bg-gray-200 hover:text-blue-600 py-2 rounded-lg px-4 transition delay-60"
      >
        {props.icon ? (
          <img className="w-6 self-center mr-3" src={props.icon} alt="" />
        ) : (
          ""
        )}
        {props.itemName}
      </a>
    </div>
  );
}

export default LiItem;
