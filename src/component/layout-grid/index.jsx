import CenterContent from "./center-content";
import LeftSideBar from "./left-side-bar";
import RightSideBar from "./right-side-bar";

function MainLayout() {
  return (
    <div className="px-4 lg:px-10 mx-auto mt-3">
      <div class="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-7 gap-1 lg:gap-2 ">
        <LeftSideBar />
        <CenterContent />
        <RightSideBar />
      </div>
    </div>
  );
}
export default MainLayout;
