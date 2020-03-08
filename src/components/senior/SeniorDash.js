import React, { useState, useEffect } from 'react';
import DashNavBar from '../navs/DashNavBar';
import { getTasks, editTask } from '../../redux/actions';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
	Button,
	Col,
	Row,
	Modal,
	ModalBody,
	ModalFooter,
	Card,
	CardHeader,
	CardBody,
	CardText,
	CardFooter,
	Collapse,
} from 'reactstrap';

const SeniorDash = () => {
	const tasks = useSelector(state => state.tasks);
	const dispatch = useDispatch();
	const { id } = useParams();

	const [myTasks, setMyTasks] = useState([]);
	const [taskToComplete, setTaskToComplete] = useState({});
	const [modal, setModal] = useState(false);
	const [taskListIsOpen, setTaskListIsOpen] = useState(false);
	const [cardBodyIsOpen, setCardBodyIsOpen] = useState(false);

	useEffect(() => {
		dispatch(getTasks());
	}, [dispatch]);

	const toggle = () => setModal(!modal);

	const handleShowTasksClick = () => {
		setMyTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(id)));
		toggle();
		setTaskListIsOpen(true);
		console.log('primary clicked');
	};

	const toggledTaskToPut = t => {
		if (t.is_completed === false) {
			return {
				...t,
				is_completed: true,
			};
		} else if (t.is_completed === true) {
			return {
				...t,
				is_completed: false,
			};
		}
	};

	const toggleCard = (myTask, index) => {
		setMyTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(id)));
		const arrayWithTaskToComplete = myTasks.filter(task => task.id === myTask.id);
		const [extractedTaskObject] = arrayWithTaskToComplete;
		setTaskToComplete(toggledTaskToPut(extractedTaskObject));
		setCardBodyIsOpen({ ...cardBodyIsOpen, [index]: !cardBodyIsOpen[index] });
		handleShowTasksClick();
	};

	const handleToggleCompletedClick = (myTask, index) => {
		dispatch(editTask(taskToComplete));
		setCardBodyIsOpen(!cardBodyIsOpen);
		setMyTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(id)));
		const primary = document.getElementById('primary');
		setTimeout(() => {
			primary.click();
		}, 500);
	};

	return (
		<div>
			<DashNavBar />
			<div>
				<h1 className='nonForm'>To Do</h1>
			</div>
			<Button
				id='primary'
				style={{ marginTop: '50px' }}
				className='formButton'
				outline
				color='primary'
				onClick={handleShowTasksClick}>
				Show My Tasks
			</Button>
			<Collapse isOpen={taskListIsOpen}>
				<div>
					<Row>
						{myTasks.length === 0 ? (
							<Modal isOpen={modal} toggle={toggle}>
								<ModalBody>You have no pending tasks</ModalBody>
								<ModalFooter>
									<Button color='secondary' onClick={toggle}>
										Cancel
									</Button>
								</ModalFooter>
							</Modal>
						) : (
							myTasks.map((myTask, index) => {
								return (
									<>
										{myTask.is_completed === true ? (
											<div key={index} style={{ display: 'none' }}></div>
										) : (
											<Col lg='3' key={index}>
												<div className='col'>
													<Card className='cards'>
														<CardHeader>
															<h3>{myTask.title}</h3>
														</CardHeader>

														<Collapse isOpen={cardBodyIsOpen[index] ? true : false}>
															<CardBody style={{ display: 'flex', justifyContent: 'space-between' }}>
																<span>
																	<Button
																		id='secondary'
																		size='sm'
																		color='danger'
																		onClick={e => {
																			e.stopPropagation();
																			handleToggleCompletedClick(myTask, index);
																		}}>
																		X
																	</Button>
																</span>
																<CardText style={{ paddingTop: '1.5%', width: '85%' }}>{myTask.description}</CardText>
															</CardBody>
														</Collapse>

														<CardFooter style={{ display: 'flex', justifyContent: 'space-between' }}>
															<p>Task ID: {myTask.id}</p>

															<Button onClick={() => toggleCard(myTask, index)}>Details</Button>
														</CardFooter>
													</Card>
												</div>
											</Col>
										)}
									</>
								);
							})
						)}
					</Row>
				</div>
			</Collapse>
		</div>
	);
};

export default SeniorDash;
