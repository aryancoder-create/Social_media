import React from "react";
import pic3 from "../assets/pic3.jpg";
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pic7.jpg'
import pic8 from '../assets/pic8.jpg'
import pic9 from '../assets/pic9.jpg'
import pic10 from '../assets/pic10.jpg'
import pic11 from '../assets/pic11.jpg'
import Middle_card from "./Middle_card";
import PostFeed from "./PostFeed";
const MiddleSide = () => {
  const storiescard = [
    {
      storiesimage:pic1,
      storiesusername:"Aryan"
    },
    {
      storiesimage:pic2,
      storiesusername:"Aryan"
    },
    {
      storiesimage:pic3,
      storiesusername:"Aryan"
    },
    {
      storiesimage:pic4,
      storiesusername:"Aryan"
    },
    {
      storiesimage:pic5,
      storiesusername:"Aryan"
    },
    {storiesimage:pic6,
      storiesusername:"Aryan"
    },
    {
      storiesimage:pic7,
      storiesusername:"Aryan"
    },
    {
      storiesimage:pic8,
      storiesusername:"Aryan"
    },
    {
      storiesimage:pic9,
      storiesusername:"Aryan" 
    },
    {
       storiesimage:pic10,
      storiesusername:"Aryan"
    },
  ]
  return (
    <div className="middle-wrapper">
 <div  className="stories-parent">
    {storiescard.map((story,index) =>(
      <Middle_card 
      key={index}
      storiesimage ={story.storiesimage}
      storiesusername={story.storiesusername}/>
    ))}
 
   </div>
      <PostFeed/>

    </div>
  
  );
};

export default MiddleSide;
