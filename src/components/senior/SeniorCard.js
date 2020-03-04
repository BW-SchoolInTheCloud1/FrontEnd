import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTasks } from '../../redux/actions'
import img from '../../images/ph.bmp';
import { Image } from 'semantic-ui-react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardFooter, CardTitle, CardText, Collapse } from 'reactstrap'
import AddTask from '../admin/AddTask'


const SeniorCard = ({ firstName, lastName, times, location, user_id }) => {
	const [taskListIsOpen, setTaskListIsOpen] = useState(false);
	const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
	const [userTasks, setUserTasks] = useState([])

	const tasks = useSelector(state => state.tasks)
	const dispatch = useDispatch()

	const toggleLeft = () => setTaskListIsOpen(!taskListIsOpen);
	const toggleRight = () => setAddTaskIsOpen(!addTaskIsOpen);

	useEffect(() => {
		dispatch(getTasks())
	}, [dispatch]) 

	const handleTaskListClick = () => {
		setUserTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(user_id)))
		toggleLeft()
		setAddTaskIsOpen(false)
	}

	const handleAddTaskClick = () => {
		setTaskListIsOpen(false)
		toggleRight()
	}
  
	return (
		<div className='col'>
			<Card
				key={user_id}
				// className='cardWrapper'
				// style={{
				// 	background: '#F4F1DE',
				// 	boxShadow: '15px 20px 15px black',
				// 	borderRadius:'10px',
				// 	borderTop: '5px groove #E07A5F',
				// 	borderBottom: '5px groove #E07A5F',
				// 	borderRight: '1px solid #E07A5F',
				// 	borderLeft: '1px solid #E07A5F',
				// }}
			>
				<CardHeader className='imgDiv' tag='h3'>
					<div>
						<Image src={img} alt='avatar' avatar className='img' />
					</div>
					<div>
						{firstName} {lastName}
					</div>
				</CardHeader>
      	  	<CardBody>
      	  	  	<CardTitle tag='h3'>Availability</CardTitle>
					 	<CardText>{location}</CardText>
      	  	  		<CardText>{times}</CardText>
						<ButtonGroup className='buttonGroup'>
      	  	  			<Button outline='secondary' onClick={handleTaskListClick}>View Tasks</Button>
							<Button outline='secondary' onClick={handleAddTaskClick}>Add Task</Button>
						</ButtonGroup>
						<Collapse isOpen={taskListIsOpen}>
        					<Card>
        					  	<CardBody>
									<ol>
										{userTasks.map(userTask => {
											return (
												<li>
													{userTask.title}
												</li>
											)
										})}
									</ol>
        					  	</CardBody>
        					</Card>
      				</Collapse>

						<Collapse isOpen={addTaskIsOpen}>
							<Card style={{ marginTop: '20px '}}>
								<AddTask user_id={user_id} toggleRight={toggleRight} />
							</Card>
						</Collapse>
      	  	</CardBody>
				<CardFooter className="text-muted">Volunteer ID: {user_id}</CardFooter>
      	</Card>
		</div>
	);
}

export default SeniorCard