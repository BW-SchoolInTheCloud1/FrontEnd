import React, { useState, useEffect } from 'react';
import DashNavBar from '../navs/DashNavBar';
import { getTasks } from '../../redux/actions';
import { useParams, useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Row} from 'reactstrap';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const SeniorDash = () => {
	const tasks = useSelector(state => state.tasks);
	const [myTasks, setMyTasks] = useState([]);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getTasks());
	}, [dispatch]);

	const handleClick = () => {
		setMyTasks(tasks.filter(task => parseInt(task.volunteer_id) === parseInt(id)));
   };
   
	const deleteTask = task => {
      console.log(task)
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
				<Button style={{ marginTop: '50px' }} className='formButton' onClick={handleClick}>
					Show My Tasks
				</Button>
				<div>
					<Row>
						{myTasks.map(task => {
							return (
								<Col lg='3'>
                           <div key={task.id}>
										<Button
											onClick={e => {
												e.stopPropagation();
												deleteTask(task);
											}}>
											X
										</Button>
										<h3>{task.title}</h3>
										<p>{task.description}</p>
                              <p>{task.id}</p>
									</div>
								</Col>
							);
						})}
					</Row>
				</div>
		</div>
	);
};

export default SeniorDash;