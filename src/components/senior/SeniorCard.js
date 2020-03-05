import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTasks } from '../../redux/actions'
import img from '../../images/ph.bmp';
import { Image } from 'semantic-ui-react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardFooter, CardTitle, CardText, Collapse, Navbar} from 'reactstrap'
import AddTask from '../admin/AddTask'
import Appointments from './Appointments'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import axios from 'axios'
import TaskEditForm from '../admin/TaskEditForm';

const SeniorCard = ({ firstName, lastName, times, location, volunteer_id }) => {
	const [taskListIsOpen, setTaskListIsOpen] = useState(false);
	const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
	const [toggleCalender, setToggleCalender] = useState(false);
	const [editFormIsOpen, setEditFormIsOpen] = useState(false);
	const [taskToEdit, setTaskToEdit] = useState({
		 title: '', 
		 description: '', 
		 volunteer_id: '' 
	});
	const [userTasks, setUserTasks] = useState([])
	const [avatars, setAvatars]=useState([])
	const tasks = useSelector(state => state.tasks)
	const dispatch = useDispatch()
	
	const toggleLeft = () => setTaskListIsOpen(!taskListIsOpen);
	const toggleRight = () => setAddTaskIsOpen(!addTaskIsOpen);
	const toggleApptBook = () => setToggleCalender(!toggleCalender);
	const toggleEditForm = () => setEditFormIsOpen(!editFormIsOpen);

	const url = window.location.href;
	
	useEffect(() => {
		dispatch(getTasks())
		axios
			.get ('https://pixabay.com/api/?key=15487793-8de1803bf08fe5bfa00ea0af4&q=grandparents&image_type=photo')
			.then(res => {
				console.log('Images API INFO ----->', res.data.hits)
				setAvatars(res.data.hits.map(avatar => avatar.largeImageURL))
			})
			.catch(err => console.log("No Images", err))
	}, [dispatch]) 

	const deleteTask = task => {
      console.log('from deleteTask on SeniorCard', task)
		axiosWithAuth()
			.delete(`/todos/${task.id}`)
			.then(res => {
            console.log('response =', res);
            setUserTasks(userTasks.filter(userTask => parseInt(userTask.id) !== parseInt(task.id)));
         })
			.catch(err => console.log(err));
	};

	const handleTaskListClick = () => {
		setUserTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(volunteer_id)))
		toggleLeft()
		setAddTaskIsOpen(false)
	}

	const handleAddTaskClick = () => {
		setTaskListIsOpen(false)
		toggleRight()
	}

	const handleEditClick = task => {
		console.log('from handleEditClick on SeniorCard, before setting task', task)
		console.log('userTasks ===', userTasks)
		const [extractedUser] = userTasks
		console.log('extractedUser', extractedUser)
		setTaskToEdit(extractedUser)
		toggleEditForm()
		console.log('From the handleEditClick (setTaskToEdit) function call ---> ', taskToEdit)
	} 

	return (
		<div className='col'>
			<Card
				key={volunteer_id}
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
											<div classname='editFormCollapse'>
												<div className='task-nav'>
													
													<li className='li'>
														<p>{userTask.title}</p>
													</li>

													<div className='task-btns'>
														<span style={{ margin: '1%' }}>
															<Button onClick={handleEditClick} color='primary' size='sm'>
																Edit
															</Button>
														</span>
														<span style={{ margin: '1%' }}>
															<Button 
																onClick={e => {
																	e.stopPropagation();
																	deleteTask(userTask);
																}}
																color='danger' 
																size='sm'
															>
																Remove
															</Button>
															
														</span>
													</div>
												</div>
												<Collapse isOpen={editFormIsOpen}>
													<TaskEditForm setTaskToEdit={setTaskToEdit} taskToEdit={taskToEdit} toggle={toggleEditForm} closeTaskView={toggleLeft}/>
												</Collapse>
											</div>
										);
									})}
									
									</ol>
								
							</CardBody>
						</Card>
					</Collapse>

					<Collapse isOpen={addTaskIsOpen}>
						<Card style={{ marginTop: '20px ' }}>
							<AddTask volunteer_id={volunteer_id} toggleRight={toggleRight} />
						</Card>
					</Collapse>
				</CardBody>
				<CardFooter className='text-muted'>
					{url.match(/admin-dash/gi) ? (
						<span>Volunteer ID: {volunteer_id}</span>) : (
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