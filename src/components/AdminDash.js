import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { assignNewTask, getTasks } from '../redux/actions'
import { Button, Container, Row, Col, Spinner } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import styled from 'styled-components'

const BackgroundDiv = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    // background-color: #fcb97d;
    background-image: linear-gradient(180deg, #fcb97d 25%, #e07a5f 100%);
`

const AdminDash = () => {
   const tasks = useSelector(state => state.tasks)
   const isFetching = useSelector(state => state.isFetching)
   const dispatch = useDispatch();

	const [taskToAssign, setTaskToAssign] = useState({
		title: '',
      description: '',
      volunteer_id: ''
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
         volunteer_id: ''
		});
   };
   
   return (
      <div>
         <BackgroundDiv>
            <Container>
               <Container style={{ paddingTop: '40px' }}>
			      	<Row>
			      		<Col sm='12' md={{ size: 6, offset: 3 }}>
                        <h3>Assign a new task below</h3>
			      			<AvForm onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
			      				<AvField
			      					label='Title'
			      					type='text'
			      					name='title'
			      					id='title'
			      					placeholder='Please enter task title here'
			      					value={taskToAssign.title}
			      					onChange={handleChange}
			      					validate={{
			      						required: { value: true, errorMessage: 'A title is required to assign a new task' },
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
			      						required: { value: true, errorMessage: 'A task description is required to assign a new task' },
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
			      						required: { value: true, errorMessage: 'A valid Volunteer ID is required to assign a new task' },
			      					}}
			      				/>
			      				<Button>Assign Task</Button>
			      			</AvForm>
			      		</Col>
			      	</Row>
			      </Container>
               {isFetching ? (<div><Spinner /><Spinner /><Spinner /></div>) : (<Button onClick={() => dispatch(getTasks())}>Show all tasks</Button>)}
               <div>{tasks.map(task => <p>{task.title}</p>)}</div>
            </Container>
         </BackgroundDiv>
      </div>
   )
}

export default AdminDash