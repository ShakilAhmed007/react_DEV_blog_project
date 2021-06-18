import NavBar from "../nav";

function ShowBlog() {
  return (
    <div>
      <NavBar />
      <div className="pt-16">
        <div className="px-4 lg:px-10 mx-auto mt-3">
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="sm:py-4 m-1 col-span-1">
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-1 sm:gap-10 sm:my-5 md:fixed">
                <div className="">
                  <a href="" className="">
                    {" "}
                    <img
                      className="p-2 hover:bg-green-100 rounded-full m-auto "
                      src="/assets/icons/unicon.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="">
                  <a href="" className="">
                    {" "}
                    <img
                      className="p-2 hover:bg-green-100 rounded-full m-auto "
                      src="/assets/icons/unicon.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" ">
                  <a href="" className="">
                    {" "}
                    <img
                      className="p-2 hover:bg-green-100 rounded-full m-auto "
                      src="/assets/icons/unicon.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className=" rounded-lg bg-white m-1 col-span-10 md:col-span-8 ">
              <div className="card">
                <div className="card-imgae">
                  <img
                    className="rounded-t-lg"
                    src="/post_images/efb81bd1rxcsbtg449u2.webp"
                    alt=""
                  />
                </div>
                <div className="card-content p-10">
                  <div className="title">
                    <h1 className=" text-4xl md:text-6xl font-bold">
                      React 18 Alpha is out! Now what?{" "}
                    </h1>
                  </div>
                  <div className="tags my-2">
                    <a href="" className="bg-gray-100 rounded-lg p-1 mx-2">
                      #react
                    </a>
                    <a href="" className="bg-gray-100 rounded-lg p-1 mx-2">
                      #react
                    </a>
                    <a href="" className="bg-gray-100 rounded-lg p-1 mx-2">
                      #react
                    </a>
                  </div>
                  <div className="profile flex my-3">
                    <img
                      className="w-8 rounded-full"
                      src="/assets/images/profile/profile.png"
                      alt=""
                    />
                    <span className="self-center ml-3">shakil ahmed</span>
                  </div>
                  <div className="blog-body my-10 text-lg md:text-xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Maxime id rem harum optio natus minima illum blanditiis
                    libero quas eveniet, veniam, repellendus totam ex earum fuga
                    laudantium iusto inventore voluptatem. Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Maxime id rem harum
                    optio natus minima illum blanditiis libero quas eveniet,
                    veniam, repellendus totam ex earum fuga laudantium iusto
                    inventore voluptatem.
                  </div>
                </div>
              </div>
            </div>
            <div className=" m-1 col-span-3 hidden md:block">
              <div className="p-4 bg-white rounded-lg fixed">
                <div className="profile-card">
                  <div className="profile flex my-3">
                    <img
                      className="w-10 rounded-full"
                      src="/assets/images/profile/profile.png"
                      alt=""
                    />
                    <span className="self-center ml-3 text-lg font-bold">
                      shakil ahmed
                    </span>
                  </div>
                </div>
                <div className="more-info my-5">
                  <span className="text-sm font-bold text-gray-600">WORK</span>
                  <br />
                  <span className="text-sm">
                    Principal Developer Experience Engineer at Netlify
                  </span>
                  <br />
                  <span className="text-sm font-bold text-gray-600">
                    Location
                  </span>
                  <br />
                  <span className="text-sm">Chicago, IL</span>
                  <br />
                  <span className="text-sm font-bold text-gray-600">
                    Education
                  </span>
                  <br />
                  <span className="text-sm">B.S. Computer Science </span>
                </div>
                <button className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowBlog;
