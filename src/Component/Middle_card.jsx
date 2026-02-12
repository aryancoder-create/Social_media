import React from 'react'
import pic1 from'../assets/pic1.jpg'
const Middle_card = (props) => {
  return (
   
         <div className="storyblock">
           <div className="stories-image">
         
               <img src={props.  storiesimage} alt="" className='story-imag' />
             </div>
               <span className="story-username">{props. storiesusername}</span>
           </div>
           
           
          
         
       
  )
}

export default Middle_card
