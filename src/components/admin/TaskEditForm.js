import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { useDispatch, useSelector } from 'react-redux';
import {  getTaskById } from '../../redux/actions';
import {  Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

const TaskEditForm = () => {
	const taskData = useSelector(state => state.taskData)
	const dispatch = useDispatch()
	const [taskToEdit, setTaskToEdit] = useState({ title: '', description: '', volunteer_id: '' });
	 

	 /* useEffect(() => {
		 dispatch((getTaskById()))
		 setTaskToEdit(taskData)
	 }, []) */
	 useEffect(() => {
			axiosWithAuth()
				.get(`/todos/`)
				.then(response => {
					console.log(response);
					setTaskToEdit(response.data);
				})
				.catch(err => {
					console.log(err);
				});
		}, []);
	
	const handleChange = ev => {    
		ev.persist();    
		let value = ev.target.value;      
		setTaskToEdit({    
			...taskToEdit,    
			[ev.target.name]: value    
		});   
	};
	const editTask = task => {
		console.log(task);
		axiosWithAuth()
			.put(`/admin/${task.admin_id}/todos`, task.id)
			.then(res => {
				console.log('response', res);
			})
			.catch(err => console.log(err));
	};
   
   return (
				<div>
					<AvForm className='formWrapper' onSubmit={editTask}>
						<AvField
							label='Title'
							type='text'
							name='title'
							id='title'
							placeholder='Please enter task title here'
							value={taskToEdit.title}
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
							value={taskToEdit.description}
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
							value={taskToEdit.volunteer_id}
							onChange={handleChange}
							validate={{
								required: {
									value: true,
									errorMessage: 'A valid Volunteer ID is required to assign a new task',
								},
							}}
						/>
						<Button >
							Edit
						</Button>
					</AvForm>
				</div>
			);
}

export default TaskEditForm