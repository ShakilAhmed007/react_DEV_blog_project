import React from "react";
import FeedCard from "../feed-card";

function CenterContent() {
  return (
    <div className="col-span-7 md:col-span-5 lg:col-span-2">
      <FeedCard />
      <FeedCard />
    </div>
  );
}

export default CenterContent;
