import React, { Profiler } from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/instagram.png'
import {
  AppleIcon,
  Film,
  Grid2X2Icon,
  Heart,
  Home,
  MenuIcon,
  MessageCircle,
  MessageCircleCodeIcon,
  PlusCircle,
  PointerOffIcon,
  Search
} from 'lucide-react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
const LeftSide = () => {
  return (
    <div className='container'>
        <div className='logopart'>
            <img src={logo} alt="" />
            </div>
<div className="navlink-bar">
 <nav className="navbar">
  <ul className='navbar-list'>
    <li>
<Link to="/Home"><Home/>
<span className='loader'>Home</span>


</Link>

   </li>

<li>
<Link to="/message"><MessageCircle/>
<span>Message</span></Link>
</li>
  <li>
  <Link to="/Reels"><Film/><span>Reels</span></Link>
  </li>
<li>
 <Link to="/Search"><Search/><span>Search</span></Link>
</li>
 <li>
 <Link to="/Notification"><NotificationsIcon/><span>Notification</span></Link>
 </li>
 

 

 <li>
 <Link to="/create"><PlusCircle/><span>Create</span></Link>
 </li>
 <li>
 <Link to="/avatar"><Avatar/><span>Profile</span></Link>
 </li>

 <li>
 <Link to="/menuicon"><MenuIcon/><span>Menu</span></Link>
 </li>

  <li>
 <Link to="/menuicon"><Grid2X2Icon/><span>Add more</span></Link>
 </li>

  </ul>
  
 </nav>

        </div>
      
    </div>
  )
}

export default LeftSide
