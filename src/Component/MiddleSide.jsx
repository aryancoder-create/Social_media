import React from 'react'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pic7.jpg'
import pic8 from '../assets/pic8.jpg'
import pic9 from '../assets/pic9.jpg'
import pic10 from '../assets/pic10.jpg'
import pic11 from '../assets/pic11.jpg'

import middlecard from '../Component/Middle_card'
import Middle_card from '../Component/Middle_card'
const MiddleSide = () => {
    const stories =[
        {
            username:"sameer raj",
            image:pic6
        },
        {username:'doremon',
            image:pic7
        },
        {
        username:'chhota bheem',
        image:pic8
        }
        ,{
            username:'pokemon',
            image:pic9
        },
        {username:'UB',
            image:pic10
        },
        {
            username:'motu_patlu',
            image:pic11
        },
    ]
  return (
   <div style={{
      display: 'flex',
      overflowX: 'auto',
      padding: '12px 8px',
      background: '#000',
      gap: '4px'
    }}>
      {stories.map((story, i) => (
        <Middle_card
          key={i}
          imageUrl={story.image}
          username={story.username}
          // isLive={i === 1}   ← uncomment if you want LIVE badge
        />
      ))}
    </div>
  );
}


export default MiddleSide
