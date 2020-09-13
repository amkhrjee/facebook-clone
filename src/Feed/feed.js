import React from "react";
import StoryReel from "./StoryReel/storyReel";
import "./feed.css";
import MessageSender from "./Message/messageSender";
import Post from "../Components/Post/post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        // key={id}
        profilePic="https://randomuser.me/api/portraits/women/50.jpg"
        message="Wow this works"
        timestamp="This is timestamps"
        username="daisy"
        image="https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ"
      />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
