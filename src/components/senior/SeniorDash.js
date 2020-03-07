import React, { useState, useEffect } from 'react';
import DashNavBar from '../navs/DashNavBar';
import { getTasks, editTask  } from '../../redux/actions';
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
	Collapse
} from 'reactstrap';
import checked from '../../images/checkmark.png'

const SeniorDash = () => {
	const tasks = useSelector(state => state.tasks);
	const dispatch = useDispatch();
	const { id } = useParams();
	
	const [myTasks, setMyTasks] = useState([]);
	const [isCompleted, setIsCompleted] = useState({});
	const [taskToComplete, setTaskToComplete] = useState({});
	const [modal, setModal] = useState(false);
	const [taskListIsOpen, setTaskListIsOpen] = useState(false);
	const [cardBodyIsOpen, setCardBodyIsOpen] = useState(false);

	useEffect(() => {
		dispatch(getTasks());
	}, [dispatch]);

	const toggle = () => setModal(!modal);

	const toggleCompleted = (index) => {
		setIsCompleted({...isCompleted, [index]: !isCompleted[index]});
	}

	const handleShowTasksClick = () => { //ViewTasks
		// dispatch(getTasks());
		setMyTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(id)));
		toggle();
		setTaskListIsOpen(true)
	};

	const toggledTaskToPut = t => {
		if (t.is_completed === false) {
			return {
				...t,
				is_completed: true
			}
		} else if (t.is_completed === true) {
			return {
				...t,
				is_completed: false
			}
		}
	}

	const toggleCard = (myTask, index) => { //Details
		handleShowTasksClick()
		console.log('myTasks from toggleCard:', myTasks)
		// dispatch(getTasks())
		
		const arrayWithTaskToComplete = myTasks.filter(task => task.id === myTask.id)
		const [extractedTaskObject] = arrayWithTaskToComplete
		console.log('extractedObject:', extractedTaskObject)
		console.log('modifiedExtractedObject:', toggledTaskToPut(extractedTaskObject))
		setTaskToComplete(toggledTaskToPut(extractedTaskObject))
		setCardBodyIsOpen({...cardBodyIsOpen, [index]: !cardBodyIsOpen[index]});
	}
	
	const handleToggleCompletedClick = (myTask, index) => { //Submit
		// setMyTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(id)));
		console.log('myTasks from handleToggleCompletedClick:', myTasks)
		console.log('taskToComplete', taskToComplete)
		dispatch(editTask(taskToComplete))
		toggleCompleted(index) //color(notAPI-connected)
		setCardBodyIsOpen(!cardBodyIsOpen)
		const upDatedTasks = myTasks.filter(task => parseInt(task.volunteer_id) !== parseInt(taskToComplete.id));setMyTasks([
			...upDatedTasks,
			taskToComplete
		])
		handleShowTasksClick()
	}; 

	return (
		<div>
			<DashNavBar />
			<div>
				<h1 className='nonForm'>To Do</h1>
			</div>
			<Button style={{ marginTop: '50px' }} className='formButton' outline color='primary' onClick={handleShowTasksClick}>
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
								<Col lg='3' key={index}>
									<div className='col'>
										<Card className='cards'>
											<CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
												<h3>{myTask.title}</h3>
												<Button onClick={() => toggleCard(myTask, index)}>More</Button>
											</CardHeader>
											<Collapse isOpen={cardBodyIsOpen[index] ? true : false}>
												<CardBody>
													<CardText>{myTask.description}</	CardText>
													{isCompleted[index] === true ?
													(<Button
													style={{maxWidth: '30px'}}
													outline
													color='success'
													onClick={() => handleToggleCompletedClick(index)}
													><img style={{marginLeft: '-115%'}} src={checked} alt='completed'/></Button>)
													 : 
													(<Button
													outline
													color='danger'
													onClick={() => handleToggleCompletedClick(myTask, index)}
												>
													X
												</Button>) }
												</CardBody>
											</Collapse>
											<CardFooter>Task ID: {myTask.id}</CardFooter>
										</Card>
									</div>
								</Col>
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
