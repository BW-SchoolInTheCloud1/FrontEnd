import React, { useState } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Collapse } from 'reactstrap';
import TaskEditForm from './admin/TaskEditForm';

const Example = ({ title, description, assigned_to}) => {
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);

   return (
      <div>
         <Card>
            <CardHeader tag="h3">{title}</CardHeader>
               <CardBody>
                  <CardText>{description}</CardText>
                  <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Edit Task</Button>
                  <Collapse isOpen={isOpen}>
                     <Card>
                        <CardBody>
                           <TaskEditForm />
                        </CardBody>
                     </Card>
                  </Collapse>
               </CardBody>
            <CardFooter className="text-muted">Assigned to: {assigned_to}</CardFooter>
        </Card>
      </div>
   );
};

export default Example;