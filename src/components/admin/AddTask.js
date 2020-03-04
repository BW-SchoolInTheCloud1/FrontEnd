import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { assignNewTask, getTasks } from '../../redux/actions';
import { Button, Container, Row, Col,} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import AdminDash from './AdminDash';


const AddTask = ({ user_id, toggleRight }) => {
  	const dispatch = useDispatch()
	const [taskToAssign, setTaskToAssign] = useState({
		title: '',
		description: '',
		volunteer_id: user_id,
	});

	const handleChange = e => {
		setTaskToAssign({
			...taskToAssign,
			[e.target.name]: e.target.value,
		});
		console.log(taskToAssign)
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(assignNewTask(taskToAssign));
		dispatch(getTasks());
		setTaskToAssign({
			title: '',
			description: '',
			volunteer_id: user_id,
		});
		toggleRight()
	};

  return (
		<AvForm onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
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
				// style={{ display: 'none' }}
				// disabled
				type='text'
				name='volunteer_id'
				id='volunteer_id'
				value={taskToAssign.volunteer_id}
			/>
			<Button className='formButton'>Assign Task</Button>
		</AvForm>
);
}
  export default AddTask