import React, { useState } from "react"
import { BackgroundDiv } from "../../Styles/styles"
import DashNavBar from '../navs/DashNavBar'
import { getTasks } from "../../redux/actions"
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'reactstrap'

const SeniorDash = () => {
   const [myTasks, setMyTasks] = useState([])
   const tasks = useSelector(state => state.tasks)
   const dispatch = useDispatch()
   const { id } = useParams()

   const handleClick = () => {
      dispatch(getTasks)
      console.log(tasks)
      setMyTasks(tasks.filter(task => task.volunteer_id === id))
      console.log(myTasks)
   }

   return (
      <div>
      <DashNavBar />
      <BackgroundDiv>
         <div>
            <h1>To Do</h1>
         </div>
         <Button  style={{ marginTop: '50px' }} className='formButton' onClick={handleClick}>
            Show all Tasks
         </Button>

         <div>
            My Tasks
            {myTasks.map(task => {
               return (
                  <div>
                     <h3>{task.title}</h3>
                     <p>{task.description}</p>
                  </div>
               )  
            })}
         </div>

      </BackgroundDiv>
      </div>
   )
}

export default SeniorDash
