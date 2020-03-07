import React, { useState, useEffect } from 'react';
import DashNavBar from '../navs/DashNavBar';
import { getTasks, toggleTaskCompleted  } from '../../redux/actions';
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
	CardFooter
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

	useEffect(() => {
		dispatch(getTasks());
	}, [dispatch, isCompleted, taskToComplete]);

	const toggle = () => setModal(!modal);

	const toggleCompleted = (index) => {
		setIsCompleted({...isCompleted, [index]: !isCompleted[index]});
	}

	const handleClick = () => {
		dispatch(getTasks());
		setMyTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(id)));
		toggle();
	};
	
	const handleToggleCompletedClick = (myTask, index) => {
		const arrayWithTaskToComplete = myTasks.filter(task => task.id === myTask.id)
		const [extractedTaskObject] = arrayWithTaskToComplete
		setTaskToComplete(extractedTaskObject)
		dispatch(toggleTaskCompleted(extractedTaskObject))	
		toggleCompleted(index)
		dispatch(getTasks())
	}; 

	return (
		<div>
			<DashNavBar />
			<div>
				<h1 className='nonForm'>To Do</h1>
			</div>
			<Button style={{ marginTop: '50px' }} className='formButton' outline color='primary' onClick={handleClick}>
				Show My Tasks
			</Button>
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
												{isCompleted[index] === true ?
													(<Button
													style={{maxWidth: '30px'}}
													outline
													color='success'
													onClick={() => handleToggleCompletedClick(myTask, index)}
													><img style={{marginLeft: '-115%'}} src={checked} alt='completed'/></Button>)
													 : 
													(<Button
													outline
													color='danger'
													onClick={() => handleToggleCompletedClick(myTask, index)}
												>
													X
												</Button>) }
												
											</CardHeader>
											<CardBody>
												<CardText>{myTask.description}</CardText>
											</CardBody>
											<CardFooter>Task ID: {myTask.id}</CardFooter>
										</Card>
									</div>
								</Col>
							);
						})
					)}
				</Row>
			</div>
		</div>
	);
};

export default SeniorDash;
