import React from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";

const PostCard = ({ userImage, username, postImage, likes, caption }) => {
  return (
    <div className="post-card">
      {/* HEADER */}
      <div className="post-header">
        <img src={userImage} alt={username} />
        <span>{username}</span>
      </div>

      {/* IMAGE */}
      <div className="post-image">
        <img src={postImage} alt="post" />
      </div>

      {/* ACTIONS */}
      <div className="post-actions">
        <div className="left">
          <Heart size={22} />
          <MessageCircle size={22} />
          <Send size={22} />
        </div>
        <Bookmark size={22} />
      </div>

      {/* DETAILS */}
      <div className="post-details">
        <p className="likes">{likes} likes</p>
        <p className="caption">
          <strong>{username}</strong> {caption}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
