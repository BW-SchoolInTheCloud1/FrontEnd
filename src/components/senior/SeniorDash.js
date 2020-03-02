import React, { useState, useEffect } from "react"
import { BackgroundDiv } from "../../Styles/styles"
import DashNavBar from '../navs/DashNavBar'
import { getTasks } from "../../redux/actions"
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'reactstrap'

const SeniorDash = () => {
   const tasks = useSelector(state => state.tasks)
   const [myTasks, setMyTasks] = useState([])
   const dispatch = useDispatch()
   const { id } = useParams()

   useEffect(() => {
      dispatch(getTasks())
   }, [])

   const handleClick = (e) => {
      setMyTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(id)))
   }

   return (
      <div>
      <DashNavBar />
      <BackgroundDiv>
         <div>
            <h1>To Do</h1>
         </div>
         <Button  style={{ marginTop: '50px' }} className='formButton' onClick={handleClick}>
            Show My Tasks
         </Button>
         <div>
            My Tasks
            {myTasks.map(task => {
               return (
                  <div key={task.id}>
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
