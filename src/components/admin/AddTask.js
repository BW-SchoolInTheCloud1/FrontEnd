import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { assignNewTask, getTasks } from '../../redux/actions';
import { Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useParams } from 'react-router-dom';

const AddTask = ({ volunteer_id, toggleRight }) => {
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getTasks());
	}, [dispatch]);

	const [taskToAssign, setTaskToAssign] = useState({
		title: '',
		description: '',
		volunteer_id: volunteer_id,
		admin_id: id,
	});

	const handleChange = e => {
		setTaskToAssign({
			...taskToAssign,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		dispatch(assignNewTask(taskToAssign));
		setTaskToAssign({
			title: '',
			description: '',
			volunteer_id: volunteer_id,
			admin_id: id,
		});
		dispatch(getTasks());
		toggleRight();
	};

	return (
		<div className='adminForms > nonForm'>
			<AvForm onSubmit={handleSubmit}>
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
					style={{ display: 'none' }}
					type='text'
					name='volunteer_id'
					id='volunteer_id'
					value={taskToAssign.volunteer_id}
				/>
				<Button color='success' className='formButton2'>
					Assign Task
				</Button>
			</AvForm>
		</div>
	);
};

export default AddTask;
