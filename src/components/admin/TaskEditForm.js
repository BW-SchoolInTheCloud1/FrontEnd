import React from 'react';
import { useDispatch } from 'react-redux';
import { getTasks, editTask } from '../../redux/actions';
import { Button } from 'reactstrap';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';

const TaskEditForm = ({ taskToEdit, setTaskToEdit, toggle, closeTaskView }) => {
	const dispatch = useDispatch();

	const url = window.location.href;

	const handleSubmit = e => {
		console.log('taskToEdit from TaskEditForm submit-->:', taskToEdit);
		e.persist();
		dispatch(editTask(taskToEdit));
		toggle();
		dispatch(getTasks());
		closeTaskView();
	};

	return (
		<div className='adminForms'>
			<AvForm onSubmit={handleSubmit}>
				<AvField
					label='Title'
					type='text'
					name='title'
					id='title'
					placeholder='Please enter task title here'
					value={taskToEdit.title}
					onChange={e => setTaskToEdit({ ...taskToEdit, title: e.target.value })}
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
					onChange={e => setTaskToEdit({ ...taskToEdit, description: e.target.value })}
					validate={{
						required: {
							value: true,
							errorMessage: 'A task description is required to assign a new task',
						},
					}}
				/>
				{url.match(/adminVolunteer/gi) ? null : (
					<AvField
						label='Volunteer ID'
						type='number'
						name='volunteer_id'
						id='volunteer_id'
						placeholder='Please enter a valid Volunteer ID'
						value={taskToEdit.volunteer_id}
						onChange={e => setTaskToEdit({ ...taskToEdit, volunteer_id: e.target.value })}
						validate={{
							required: {
								value: true,
								errorMessage: 'A valid Volunteer ID is required to assign a new task',
							},
						}}
					/>
				)}
				{url.match(/adminVolunteer/gi) ? null : (
					<AvInput
						type='checkbox'
						name='isCompleted'
						onChange={e => setTaskToEdit({ ...taskToEdit, volunteer_id: e.target.value })}
						validate={{
							required: {
								value: true,
								errorMessage: 'A valid Volunteer ID is required to assign a new task',
							},
						}}
					/>
				)}
				<Button color='success' className='formButton2'>
					Edit Task
				</Button>
			</AvForm>
		</div>
	);
};

export default TaskEditForm;
