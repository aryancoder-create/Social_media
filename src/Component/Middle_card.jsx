import React from 'react'

const Middle_card = ({imageUrl, username, isLive = false  }) => {
  return (
   <div className="story-item">
      <div className="outer-circle">
        <div className="inner-circle">
          <img 
            src={imageUrl} 
            alt={username} 
            className="profile-img"
          />
        </div>
      </div>
      
      {isLive && <span className="live-badge">LIVE</span>}
      
      <p className="username">{username}</p>
    </div>
  


  )
}

export default Middle_card
