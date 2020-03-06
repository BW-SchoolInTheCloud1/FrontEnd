import React, { useState, useEffect } from 'react';
import DashNavBar from '../navs/DashNavBar';
import { getTasks } from '../../redux/actions';
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
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const SeniorDash = () => {
	const tasks = useSelector(state => state.tasks);
	const [myTasks, setMyTasks] = useState([]);
	const [isCompleted, setIsCompleted] = useState(false);
	const [taskToComplete, setTaskToComplete] = useState({});
	const dispatch = useDispatch();
	const { id } = useParams();

	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	const toggleCompleted = (index) => {
		setIsCompleted({[index]: !isCompleted[index]});
	}

	useEffect(() => {
		dispatch(getTasks());
		console.log('isCompleted from useEffect:', isCompleted)
	}, [dispatch]);

	const handleClick = () => {
		dispatch(getTasks());
		setMyTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(id)));
		toggle();
	};
	
	const handleToggelCompletedClick = (myTask, index) => {
		const arrayWithTaskToComplete = myTasks.filter(task => task.id === myTask.id)
		const [extractedTaskObject] = arrayWithTaskToComplete
		setTaskToComplete(extractedTaskObject);	
		toggleCompleted(index)
		console.log('isCompleted:', isCompleted)
	}; 

	const deleteTask = task => {
		console.log(task);
		axiosWithAuth()
			.delete(`/todos/${task.id}`)
			.then(res => {
				console.log('response =', res);
				setMyTasks(myTasks.filter(mytask => parseInt(mytask.id) !== parseInt(task.id)));
			})
			.catch(err => console.log(err));
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
								<Col lg='3'>
									<div key={myTask.id} className='col'>
										<Card className='cards'>
											<CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
												<h3>{myTask.title}</h3>
												<Button
													outline
													color={isCompleted === true ? 'success' : 'danger'}
													onClick={() => handleToggelCompletedClick(myTask, index)}
												>
													X
												</Button>
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
