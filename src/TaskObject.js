import React from 'react';
import {ACTIONS} from './App';

function TaskObject({task, disp}) {
    return (
        <div>
            <span style={{backgroundColor: task.complete ? 'green':'yellow'}}>
                {task.taskName}
            </span>
            <button onClick={()=>disp({
                type: ACTIONS.TGL_TASKNAME, 
                payload: {id: task.id}
            })}>Toggle</button>
            <button onClick={()=>disp({
                type: ACTIONS.DLT_TASKNAME, 
                payload: {id: task.id}
            })}>Delete</button>
        </div>
    )
}

export default TaskObject
