import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTasks } from '../../redux/actions'
import img from '../../images/ph.bmp';
import { Image } from 'semantic-ui-react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardFooter, CardTitle, CardText, Collapse, Navbar} from 'reactstrap'
import AddTask from '../admin/AddTask'
import Appointments from './Appointments'



const SeniorCard = ({ firstName, lastName, times, location, user_id }) => {
	const [taskListIsOpen, setTaskListIsOpen] = useState(false);
	const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
	const [toggleCalender, setToggleCalender] = useState(false);
	const [userTasks, setUserTasks] = useState([])

	const tasks = useSelector(state => state.tasks)
	const dispatch = useDispatch()
	
	const toggleLeft = () => setTaskListIsOpen(!taskListIsOpen);
	const toggleRight = () => setAddTaskIsOpen(!addTaskIsOpen);
	const toggleApptBook = () => setToggleCalender(!toggleCalender);
	const url = window.location.href;
	useEffect(() => {
		dispatch(getTasks())
	}, [dispatch]) 

	
	const handleTaskListClick = () => {
		setUserTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(user_id)))
		toggleLeft()
		setAddTaskIsOpen(false)
		console.log("Heelllloooo", userTasks)
	}

	const handleAddTaskClick = () => {
		setTaskListIsOpen(false)
		toggleRight()
	}
  
	return (
		<div className='col'>
			<Card
				key={user_id}
				style={{
					background: '#F4F1DE',
					boxShadow: '15px 20px 15px #555',
					borderRadius: '10px',
					borderTop: '5px groove steelblue',
					borderBottom: '5px groove steelblue',
					borderRight: '1px solid steelblue',
					borderLeft: '1px solid steelblue',
				}}>
				<CardHeader className='imgDiv'>
					<div>
						<Image src={img} alt='avatar' avatar className='img' />
					</div>
					<div className='names'>
						<h2>
							{firstName} {lastName}
						</h2>
					</div>
				</CardHeader>
				<CardBody>
					<CardTitle tag='h3'>Availability</CardTitle>
					<CardText>{location}</CardText>
					<CardText>{times}</CardText>
					{url.match(/admin-dash/gi) ? (
						<ButtonGroup className='buttonGroup'>
							<Button outline color='primary' onClick={handleTaskListClick}>
								View Tasks
							</Button>
							<Button outline color='primary' onClick={handleAddTaskClick}>
								Add Task
							</Button>
						</ButtonGroup>
					) : null}
					<Collapse isOpen={taskListIsOpen}>
						<Card>
							<CardBody>
								
								<ol style={{ }}>
									{userTasks.map(userTask => {
										return (
											<div
												className='task-list'
												>
												<Navbar className='task-nav'>
													<span style={{ margin: '1%' }}>
														<Button color='primary' size='sm'>
															Edit
														</Button>
													</span>
													<span style={{ margin: '1%' }}>
														<Button color='primary' size='sm'>
															Remove
														</Button>
													</span>
												</Navbar>
												<div className='task-info'>
													<li>
														<h3>{userTask.title}</h3>
														<p>Goal: {userTask.description}</p>
													</li>
												</div>
											</div>
										);
									})}
									
									</ol>
								
							</CardBody>
						</Card>
					</Collapse>

					<Collapse isOpen={addTaskIsOpen}>
						<Card style={{ marginTop: '20px ' }}>
							<AddTask user_id={user_id} toggleRight={toggleRight} />
						</Card>
					</Collapse>
				</CardBody>
				<CardFooter className='text-muted'>
					{url.match(/admin-dash/gi) ? (
						<span>Volunteer ID: {user_id}</span>) : (
							<span>
							<Button outline color='primary' onClick={() => toggleApptBook()}>Schedule an Appointment</Button>

							<Collapse isOpen={toggleCalender}>
								<span className='calender'><Appointments/></span>
								</Collapse>
							</span>
					)}
				</CardFooter>
			</Card>
		</div>
	);
}

export default SeniorCard