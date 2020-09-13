import React from "react";
import StoryReel from "./StoryReel/storyReel";
import "./feed.css";
import MessageSender from "./Message/messageSender";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
};

export default Feed;
