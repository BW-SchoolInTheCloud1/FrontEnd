import React from 'react'
import { useSelector } from 'react-redux'
import { Col , Row} from 'reactstrap'
import TaskCard from './TaskCard'

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <Row>
				{tasks.length > 0
					? tasks.map(task => (
							<Col lg='4'>
								<TaskCard title={task.title} description={task.description} assigned_to={task.volunteer_id} task={task} />
							</Col>
					  ))
          : null}
      </Row>
			</div>
		);
}

export default TaskList