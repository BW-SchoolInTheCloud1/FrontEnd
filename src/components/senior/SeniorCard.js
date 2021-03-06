import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../../redux/actions';
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardFooter, CardTitle, CardText, Collapse } from 'reactstrap';
import AddTask from '../admin/AddTask';
import Appointments from './Appointments';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import TaskEditForm from '../admin/TaskEditForm';
import { Image, Icon } from 'semantic-ui-react';
import image from '../../images/ph.bmp';

const SeniorCard = ({ firstName, lastName, times, location, volunteer_id }) => {
	const tasks = useSelector(state => state.tasks);
	const dispatch = useDispatch();

	const [taskListIsOpen, setTaskListIsOpen] = useState(false);
	const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
	const [toggleCalender, setToggleCalender] = useState(false);
	const [editFormIsOpen, setEditFormIsOpen] = useState({});
	const [taskToEdit, setTaskToEdit] = useState({});
	const [userTasks, setUserTasks] = useState([]);
	

	const toggleLeft = () => setTaskListIsOpen(!taskListIsOpen);
	const toggleRight = () => setAddTaskIsOpen(!addTaskIsOpen);
	const toggleApptBook = () => setToggleCalender(!toggleCalender);
	const toggleEditForm = index => {
		setEditFormIsOpen({ [index]: !editFormIsOpen[index] });
	};

	const url = window.location.href;

	useEffect(() => {
		dispatch(getTasks());
	}, [dispatch]);

	const toggledTaskToPut = t => {
		if (t.is_completed === true) {
			return {
				...t,
				is_completed: false,
				title: t.title,
				description: t.description, 
			};
		}  else {
				return {
					...t,
					title: t.title,
					description: t.description,
				}
			}
	}

	const deleteTask = task => {
		console.log('from deleteTask on SeniorCard', task);
		axiosWithAuth()
			.delete(`/todos/${task.id}`)
			.then(res => {
				console.log('response =', res);
				setUserTasks(userTasks.filter(userTask => parseInt(userTask.id) !== parseInt(task.id)));
				dispatch(getTasks());
			})
			.catch(err => console.log(err));
	};

	const handleTaskListClick = e => {
		setUserTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(volunteer_id)));
		console.log(userTasks);
		toggleLeft();
		setAddTaskIsOpen(false);
	};

	const handleAddTaskClick = e => {
		setTaskListIsOpen(false);
		toggleRight();
	};

	const handleDetailsClick = (userTask, index) => {
		const arrayWithTaskToEdit = userTasks.filter(task => task.id === userTask.id);
		const [extractedTaskObject] = arrayWithTaskToEdit;
		setTaskToEdit(toggledTaskToPut(extractedTaskObject))
		toggleEditForm(index);
		// console.log('extractedObject (taskToEdit) from detailClick-->:', extractedTaskObject);
		// console.log('taskToEdit from detailClick-->:', taskToEdit);
	};

	return (
		<div className='col'>
			<Card key={volunteer_id} className='cards'>
				<CardHeader className='imgDiv'>
					<div>
						<Image src={image} alt='avatar' avatar className='img' />
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
								<ol>
									{userTasks.map((userTask, index) => {
										return (
											<div className='editFormCollapse' key={index}>
												<div className='task-nav'>
													<li className='li'>
														<div>
															{userTask.is_completed === true ? (
																<span className='title-complete'>
																	<span className='text-span'>{userTask.title}</span>
																	<span className='icon-span'>
																		<Icon name='checkmark' color='green' />
																	</span>
																</span>
															) : (
																<p>{userTask.title}</p>
															)}
														</div>
													</li>

													<div className='task-btns'>
														<span style={{ margin: '1%' }}>
															<Button onClick={() => handleDetailsClick(userTask, index)} color='primary' size='sm'>
																Details
															</Button>
														</span>
														<span style={{ margin: '1%' }}>
															<Button
																onClick={e => {
																	e.stopPropagation();
																	deleteTask(userTask);
																}}
																color='danger'
																size='sm'>
																Remove
															</Button>
														</span>
													</div>
												</div>
												<Collapse isOpen={editFormIsOpen[index] ? true : false}>
													<TaskEditForm
														setTaskToEdit={setTaskToEdit}
														taskToEdit={taskToEdit}
														toggle={toggleEditForm}
														closeTaskView={toggleLeft}
													/>
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
						<span>Volunteer ID: {volunteer_id}</span>
					
					) : (
						<span>
							<Button outline color='primary' onClick={() => toggleApptBook()}>
								Schedule an Appointment
							</Button>
							<Collapse isOpen={toggleCalender}>
								<span className='calender'>
									<Appointments />
								</span>
							</Collapse>
						</span>
					)}
				</CardFooter>
			</Card>
		</div>
	);
};

export default SeniorCard;
