import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTasks } from '../../redux/actions'
import { Col , Row} from 'reactstrap'
import TaskCard from './TaskCard'
import AdminDash from './AdminDash'

const TaskList = () => {
  	const tasks = useSelector(state => state.tasks);
	  
	const dispatch = useDispatch()

  	useEffect(() => {
		  dispatch(getTasks())
  	}, [dispatch])

  	return (
    	<div>
			<AdminDash />
      	<Row>
				{tasks.length > 0
					? tasks.map(task => (
							<Col lg='4'>
								<TaskCard title={task.title} description={task.description} assigned_to={task.volunteer_id} task={task} />
							</Col>
					  ))
          		: null
				}
      	</Row>
		</div>
	);
}

export default TaskList