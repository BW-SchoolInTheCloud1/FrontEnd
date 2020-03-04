import React, { useState } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
   CardText, Collapse } from 'reactstrap';
import TaskEditForm from './TaskEditForm';

const Example = ({ task, title, description, assigned_to}) => {
   const [isOpen, setIsOpen] = useState(false);
   const [taskToEdit, setTaskToEdit] = useState({ title: '', description: '', volunteer_id: '' });

   const toggle = () => setIsOpen(!isOpen);

	const editTask = task => {
      setTaskToEdit(task)
      toggle()
      console.log('From the editTask (setTaskToEdit) function call ---> ', taskToEdit)
   }
   
   return (
				<div className='col'>
					<Card
						style={{
							background: '#F4F1DE',
							boxShadow: '15px 20px 15px black',
							borderRadius: '10px',
							borderTop: '5px groove steelblue',
							borderBottom: '5px groove steelblue',
							borderRight: '1px solid steelblue',
							borderLeft: '1px solid steelblue',
						}}>
						<CardHeader tag='h3'>{title}</CardHeader>
						<CardBody>
							<CardText>{description}</CardText>
							<Button outline color='primary' onClick={() => editTask(task)} style={{ marginBottom: '1rem' }}>
								Edit Task
							</Button>
							<Collapse isOpen={isOpen}>
								<Card>
									<CardBody>
										<TaskEditForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} toggle={toggle} />
									</CardBody>
								</Card>
							</Collapse>
						</CardBody>
						<CardFooter className='text-muted'>Assigned to: {assigned_to}</CardFooter>
					</Card>
				</div>
			);
};

export default Example;