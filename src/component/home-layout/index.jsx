import HomeBanner from "../banner/index";
import FeedCard from "../feed-card";
import LiItem from "../li-item";
import NavBar from "../nav";

function HomeLayout() {
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
        <HomeBanner />
        <div className="px-4 lg:px-10 mx-auto mt-3">
          <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-7 gap-1 lg:gap-2 ">
            <div className="col-span-2 lg:col-span-1 hidden md:block">
              <aside>
                <nav>
                  <LiItem
                    icon="/assets/icons/home.svg"
                    itemName="Home"
                    url="/"
                  />
                  <LiItem
                    icon="/assets/icons/home.svg"
                    itemName="Home"
                    url="/"
                  />
                  <LiItem
                    icon="/assets/icons/home.svg"
                    itemName="Home"
                    url="/"
                  />
                  <LiItem
                    icon=""
                    itemName="more..."
                    url="/"
                  />
                </nav>
              </aside>
            </div>

            {/* center content */}
            <div className="col-span-7 md:col-span-5 lg:col-span-2">
              <div className="feed-header py-2">
                <h2 className="text-2xl font-bold inline border-b-4 border-blue-600">
                  Posts
                </h2>
              </div>
              <FeedCard postData={postData} />
            </div>
            {/* center content ends*/}

            <div className="bg-gray-700 hidden lg:block">i am right</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeLayout;
