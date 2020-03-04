import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTasks } from '../../redux/actions'
import { Col , Row} from 'reactstrap'
import TaskCard from './TaskCard'
import AdminDash from './AdminDash'

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
	const dispatch = useDispatch()
	const [search, setSearch] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

  	useEffect(() => {
				dispatch(getTasks());
				const results = tasks.filter(character => {
					return (
						character.title.toLowerCase().includes(searchTerm.toLowerCase())
					);
				});
				setSearch(results);
				
			}, [searchTerm,dispatch, tasks]);

			const handleChange = e => {
				setSearchTerm(e.target.value);
			};
  	return (
    	<div>
				<AdminDash />
				<span >
				<input style={{ marginLeft: '36%', width: '29%'}} placeholder='Search...' onChange={handleChange} type='text' name='searchTerm' value={searchTerm} />
				</span>
				{searchTerm.length === 0 ? (
					<div>
					<Row>
				{tasks.length > 0
					? tasks.map(task => (
							<Col lg='4'>
								<TaskCard title={task.title} description={task.description} assigned_to={task.volunteer_id} task={task} />
							</Col>
					  ))
          		: null
							}
							</Row>
					</div>
				) : (<div>
						<Row>
				{search.length > 0
					? search.map(task => (
							<Col lg='4'>
								<TaskCard title={task.title} description={task.description} assigned_to={task.volunteer_id} task={task} />
							</Col>
					  ))
          		: null
							}
						</Row>
						</div>
						)}
      	
		</div>
	);
}

export default TaskList