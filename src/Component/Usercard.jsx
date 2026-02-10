import React from "react";

const Usercard = ({ user }) => {
  return (
    <div className="Card-container">
      <div className="profile-container">
        {user.image ? (
          <img src={user.image} alt="" className="image-1" />
        ) : (
          <div className="no-image" />
        )}

        <div className="username-container">
          <div className="username-row">
            <span className="username-1">{user.username}</span>
            {user.verified && <span className="verified">right</span>}
          </div>

          <span className="username-2">{user.fullname}</span>
          <span className="followedBy">
            Followed by {user.followedBy}{" "}
            {user.followedBy.includes("+") ? "+" : ""}
          </span>
        </div>
      </div>

      <button className="btn-2">Follow</button>
    </div>
  );
};

export default Usercard;
