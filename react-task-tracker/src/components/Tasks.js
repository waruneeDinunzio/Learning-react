import React from 'react';
import Task from './Task';

const Tasks = ({tasks}) => {
   
    return (
        <div>
            {tasks.map((task) => (
                <h3 key={task.id}><Task task={task} /></h3>
            ))}
        </div>
    );
};

export default Tasks;