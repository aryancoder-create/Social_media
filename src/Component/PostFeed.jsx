import React from "react";
import PostCard from "./PostCard";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const PostFeed = () => {
  const posts = [
    {
      userImage: pic1,
      username: "aryan",
      postImage: pic2,
      likes: 124,
      caption: "Learning React 🔥",
    },
    {
      userImage: pic2,
      username: "john",
      postImage: pic3,
      likes: 98,
      caption: "Frontend life 💻",
    },
  ];

  return (
    <div className="post-feed">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};

export default PostFeed;
