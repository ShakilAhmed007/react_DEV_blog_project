import React from "react";
import ProfileImage from "../images/profile/blank-profile-picture-973460_640.png";

function FeedCard({ postData }) {
  console.log(postData.data);
  const post = postData.data.map((data) => {
    return (
      <div
        key={data.id}
        className="card border border-gray-300 bg-white rounded-lg my-3"
      >
        <div className="blog-image">
          {data.image.length ? (
            <img
              key={data.image}
              className=" rounded-t-lg"
              src={data.image}
              alt="this is a "
            />
          ) : (
            ""
          )}
        </div>

        <div className="card-body p-4">
          <div className="profile flex">
            <div className="profile-image self-center">
              {data.profile ? (
                <img
                  className="w-8 rounded-full border-1 border-gray-50"
                  src={data.profile}
                  alt="this is a "
                />
              ) : (
                <img
                  className="w-8 rounded-full border-1 border-gray-50"
                  src={ProfileImage}
                  alt="this is a "
                />
              )}
            </div>
            <div className="profile-info ml-3">
              <a href="">
                {" "}
                <div className="text-sm text-gray-600 hover:text-gray-800">
                  {data.userName}
                </div>
              </a>
              <a href="">
                <div className="text-xs text-gray-500 hover:text-gray-800">
                  {data.postDate}
                </div>
              </a>
            </div>
          </div>

          <div className="card-content md:pl-11">
            <div className="heading">
              <h3 className=" cursor-pointer text-xl md:text-3xl font-bold my-2 hover:text-blue-800">
                {data.title}
              </h3>
            </div>
            <div className="tags flex mb-1">
              {data.tags.map((tag) => {
                return (
                  <a
                    href=""
                    className="text-gray-500 p-1 text-sm hover:text-gray-800"
                  >
                    #{tag}
                  </a>
                );
              })}
            </div>
            <div className="footer flex">
              <div className="reaction flex">
                <a href="" className="flex p-2 rounded hover:bg-gray-100">
                  <img
                    className="self-center w-5"
                    src="https://img.icons8.com/material-outlined/24/4b5563/hearts.png"
                  />
                  <span className="self-center text-sm text-gray-600 ml-2">
                    {data.reaction}{" "}
                    <span className="hidden md:inline">reactions</span>
                  </span>
                </a>

                <a href="" className="flex p-2 rounded hover:bg-gray-100">
                  <img
                    className="w-5"
                    src="https://img.icons8.com/material-outlined/24/4b5563/send-comment.png"
                  />
                  <span className="self-center text-sm text-gray-600 ml-2">
                    {data.comment}{" "}
                    <span className="hidden md:inline">comments</span>
                  </span>
                </a>
              </div>
              <div className="bookmark-section ml-auto flex">
                <span className="text-xs text-gray-400 font-bold self-center">
                  5 min read
                </span>
                <a
                  href=""
                  className="p-2 transition duration-200 bg-gray-300 rounded text-gray-700 text-sm ml-2 hover:bg-gray-400"
                >
                  Save
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{post}</div>;
}

export default FeedCard;
