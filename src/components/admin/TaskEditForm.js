import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { useDispatch, useSelector } from 'react-redux';
import { assignNewTask, getTasks, getSeniors, getTaskById } from '../../redux/actions';
import {  ModalBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

const TaskEditForm = ({ taskData }) => {
	// const taskData = useSelector(state => state.taskData)
	const dispatch = useDispatch()
   const [taskToEdit, setTaskToEdit] = useState(taskData);

	// useEffect(() => {
	// 	dispatch(getTaskById(taskData))
	// 	setTaskToEdit(taskData)
	// }, [])
	
	const handleChange = ev => {    
		ev.persist();    
		let value = ev.target.value;      
		setTaskToEdit({    
			...taskToEdit,    
			[ev.target.name]: value    
		});   
	};
   
   return(
		<div>
			<AvForm className='formWrapper'>
				<AvField
					label='Title'
					type='text'
					name='title'
					id='title'
					placeholder='Please enter task title here'
					// value={taskData.title}
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
					// value={taskData.description}
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
					// value={taskData.volunteer_id}
					onChange={handleChange}
					validate={{
						required: {
							value: true,
							errorMessage: 'A valid Volunteer ID is required to assign a new task',
						},
					}}
				/>
			</AvForm>
		</div>
   )
}

export default TaskEditForm