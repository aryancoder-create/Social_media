import React from 'react'
import RightSide from './Component/Rightside.jsx'
import LeftSide from './Component/LeftSide.jsx'
const App = () => {
  return (
    <div className='main-container'>
      <div className="left-side">
        <LeftSide/>
      </div>
      <div className="middle-side">Middle-side</div>
      <div className="right-side">
        <RightSide/>
      </div>
      
    </div>
  )
}

export default App
