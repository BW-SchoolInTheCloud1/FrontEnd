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
} from 'reactstrap';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const SeniorDash = () => {
	const tasks = useSelector(state => state.tasks);
	const [myTasks, setMyTasks] = useState([]);
	const dispatch = useDispatch();
	const { id } = useParams();

	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	useEffect(() => {
		dispatch(getTasks());
	}, [dispatch]);

	const handleClick = () => {
		dispatch(getTasks());
		setMyTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(id)));
		toggle();
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
						myTasks.map(task => {
							return (
								<Col lg='3'>
									<div key={task.id} className='col'>
										<Card className='cards' style={{ height: '50vh' }}>
											<CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
												<h3>{task.title}</h3>
												<Button
													outline
													color='danger'
													onClick={e => {
														e.stopPropagation();
														deleteTask(task);
													}}>
													X
												</Button>
											</CardHeader>
											<CardBody>
												<CardText>{task.description}</CardText>
												<CardText>{task.id}</CardText>
											</CardBody>
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
