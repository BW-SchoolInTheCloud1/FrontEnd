import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assignNewTask, getTasks, getSeniors } from '../../redux/actions';
import { Button, Container, Row, Col, ButtonGroup } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import DashNavBar from '../navs/DashNavBar';
import SeniorList from '../senior/SeniorList';
import { useParams } from 'react-router-dom';
import { NavLink, Route, Switch, } from 'react-router-dom';
import TaskList from './TaskList';

const AdminDash = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
  	
	const [taskToAssign, setTaskToAssign] = useState({
		title: '',
		description: '',
		volunteer_id: '',
	});

	const handleChange = e => {
		setTaskToAssign({
			...taskToAssign,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(assignNewTask(taskToAssign));
		dispatch(getTasks());
		setTaskToAssign({
			title: '',
			description: '',
			volunteer_id: '',
		});
	};

	return (
		<div className='nonForm'>
			<DashNavBar />
			<Row>
				<Container>
					<Container style={{ paddingTop: '40px' }}>
						<Col sm='12' md={{ size: 6, offset: 3 }}>
							<h3 className='nonForm'>Assign a new task below</h3>
							<AvForm className='formWrapper' onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
								<AvField
									label='Title'
									type='text'
									name='title'
									id='title'
									placeholder='Please enter task title here'
									value={taskToAssign.title}
									onChange={handleChange}
									validate={{
										required: {
											value: true,
											errorMessage: 'A title is required to assign a new task',
										},
									}}
								/>
								<AvField
									label='Description'
									type='textarea'
									name='description'
									id='description'
									placeholder='Please enter task description'
									value={taskToAssign.description}
									onChange={handleChange}
									validate={{
										required: {
											value: true,
											errorMessage: 'A task description is required to assign a new task',
										},
									}}
								/>
								<AvField
									label='Volunteer ID'
									type='number'
									name='volunteer_id'
									id='volunteer_id'
									placeholder='Please enter a valid Volunteer ID'
									value={taskToAssign.volunteer_id}
									onChange={handleChange}
									validate={{
										required: {
											value: true,
											errorMessage: 'A valid Volunteer ID is required to assign a new task',
										},
									}}
								/>
								<Button className='formButton'>Assign Task</Button>
							</AvForm>
						</Col>
					</Container>
							<NavLink className='navLink2' to={`/admin-dash/${id}/adminTask`} activeClassName='active'>
								Show all tasks
							</NavLink>

							<NavLink className='navLink2' to={`/admin-dash/${id}/adminVolunteer`} activeClassName='active'>
								Show all Volunteers
							</NavLink>
				</Container>
			</Row>
		</div>
	);
};

export default AdminDash;
