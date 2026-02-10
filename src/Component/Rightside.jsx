import React from "react";
import { Link } from "react-router-dom";
import shawn from "../assets/shawnchari.png";
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'



import Usercard from "./Usercard.jsx";
const Rightside = () => {
  const usercard =[
    {
    username: 'priyanshu',
    fullName: 'Priyanshu',
    image: pic1,
    followedBy: 'suyash349_',
  },
  {
    username: 'rajeshparihar',
    fullName: 'Rajesh Parihar',
    image: pic2,
    followedBy: 'varshney_krishn',
  },
  {
    username: 'hemantkumaryadav',
    fullName: 'Hemant Kumar Yadav',
    image: pic4, // will show default icon
    followedBy: 'ritik_nagar290',
  },
  {
    username: 'instagram',
    fullName: 'Instagram',
    image: pic3,
    verified: true,
    followedBy: 'codewithharry',
  },

  ]



  return (
    <div className="right-container">
      <div className="profile-container">
        <img src={shawn} alt="" className="image-1" />
        <div className="username-container">
          <span className="username-1">username</span>
          <span className="username-2">username-2</span>
        </div>

        <div className="btn">
          <button className="btn-1">switch</button>
        </div>
      </div>
      <div className="middle-container">
        <div className="middle-part">
          <span className="user">Suggest me</span>
          <span className="user-1">see all</span>
        </div>
        <div className="usercard-list">
{usercard.map((user,index)=>(
  <Usercard key={index} user={user}/>
))}
        </div>
        
      </div>
      
       {/* Footer links */}
      <div className="footer-links">
        <div className="links">
          About ・ Help ・ Press ・ API ・ Jobs ・ Privacy ・ Terms
        </div>
        <div className="links">Locations ・ Language ・ Meta Verified</div>
        <div className="copyright">© 2026 INSTAGRAM FROM META</div>
      </div>
    </div>
  );
};

export default Rightside;
