import React from "react"
import { BackgroundDiv } from "../../Styles/styles"
import DashNavBar from '../navs/DashNavBar'

const SeniorDash = () => {
   return (
      <div>
      <DashNavBar />
      <BackgroundDiv>
         <div>
            <h1>To Do</h1>
         </div>
         <div>
            <p>Body of Todo List</p>
         </div>
         <div>
            <span>Extra Space</span>
         </div>
      </BackgroundDiv>
      </div>
   )
}

export default SeniorDash
