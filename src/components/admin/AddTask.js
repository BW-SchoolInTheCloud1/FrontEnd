import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { assignNewTask, getTasks } from '../../redux/actions';
import { Button} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useParams } from 'react-router-dom'


//!These Notes are for Adrian on What I have checked and my Thoughts of what might cause the issue from our side

//$ 1. The Search Does Create a Set of Two Add Forms with the same Functionality
			 //%[I removed all things search around the Add Part which means we should not have to check if the search elsewhere is creating this behavior because This search would create the problem. I can't for see any other reason another search would and the behavior persisted without two copies of the same functionality]
//$ 2. These are just thoughts as a whole or pertaining to this issue
				//@ ~~i. If we are creating two this could fix the shuffle issue in the other part of the admin section...this is a random thought that it is pushing things around because of the double creation which may be happening on edit which we can either
									//# a. Pass this thought straight to Denton 
									//# -OR-
									//# b. Double Check and then pass to Denton if we decide he needs alerted
				//@  I think pass straight to Denton because I'm pretty sure this whole issue is on his end but I do want your opinion first and have you do a glance over now that you know the behavior to see if you see a place where we may be telling it to do that but as that is coming from redux the buck should stop there~~
//! ^^^^^^^^^^^^^^^^^^^^^^^^^^^^NOTES ABOVE ONLY^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^				


const AddTask = ({ volunteer_id, toggleRight }) => {
	const dispatch = useDispatch()
	const { id } = useParams()

	useEffect(() => {
		dispatch(getTasks())
	}, [dispatch])

	const [taskToAssign, setTaskToAssign] = useState({
		title: '',
		description: '',
		volunteer_id: volunteer_id,
		admin_id: id
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
			admin_id: id
		});
		dispatch(getTasks())
		toggleRight()
	};

	return (
		<div className='adminForms > nonForm'>
		<AvForm onSubmit={handleSubmit} >
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
			<Button color='success' className='formButton2'>Assign Task</Button>
			</AvForm>
		</div>
	);
}
  export default AddTask