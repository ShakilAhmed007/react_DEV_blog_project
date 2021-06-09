import HomeBanner from "../banner/banner-ad";
import LeftSideAd from "../banner/left-side-ad";
import FlexCard from "../basic-card/flex-card";
import Card from "../basic-card/signup-card";
import FeedCard from "../feed-card";
import LiItem from "../li-item";
import NavBar from "../nav";

function ShowBlog() {
  const postData = {
    data: [
      {
        id: 1,
        slag: "fawq124",
        image: "/post_images/efb81bd1rxcsbtg449u2.webp",
        userName: "shakil ahmed",
        profile: "/profile/profile.png",
        postDate: "jun 6",
        title: "Do you know React Hooks Flow?",
        tags: ["react", "react-hooks", "learn-react"],
        reaction: 10,
        comment: 10,
      },
      {
        id: 2,
        slag: "fawq124",
        image: "/post_images/efb81bd1rxcsbtg449u2.webp",
        userName: "shakil ahmed",
        profile: "/profile/profile.png",
        postDate: "jun 6",
        title: "Do you know React Hooks Flow?",
        tags: ["react", "react-hooks", "learn-react"],
        reaction: 10,
        comment: 10,
      },
      {
        id: 3,
        slag: "fawq124",
        image: "",
        userName: "shakil ahmed",
        profile: "",
        postDate: "jun 6",
        title: "Do you know React Hooks Flow?",
        tags: ["react", "react-hooks", "learn-react"],
        reaction: 10,
        comment: 10,
      },
    ],
  };

  return (
    <div>
      <NavBar />

      <div className="pt-20">
        <div className="px-4 lg:px-10 mx-auto mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className='py-4 bg-gray-500 m-1 col-span-2 '></div>
                <div className='py-4 bg-gray-500 m-1 col-span-10 md:col-span-7 '></div>
                <div className='py-4 bg-gray-500 m-1 col-span-3 hidden md:block'></div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default ShowBlog;
