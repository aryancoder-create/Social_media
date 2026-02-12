import React from 'react'
import RightSide from './Component/Rightside.jsx'
import LeftSide from './Component/LeftSide.jsx'
import MiddleSide from './Component/MiddleSide.jsx'
// import MiddleSide from './Component/MiddleSide.jsx'
// import Newscard from './Component/Newscard.jsx'
const App = () => {
  return (
    <div className='main-container'>
      <div className="left-side">
        <LeftSide/>
      </div>
      <div className="middle-side">
        <MiddleSide/>
      </div>
      <div className="right-side">
        <RightSide/>
      </div>
      
    </div>
  )
}

export default App
