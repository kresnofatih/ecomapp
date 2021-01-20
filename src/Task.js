import React from 'react'
import {ACTIONS} from './App';

function Task({task, dispatch}) {
    return (
        <div>
            <span style={{backgroundColor: task.complete ? 'green': 'grey'}}>
                {task.job}
            </span>
            <button onClick={()=>dispatch({
                type: ACTIONS.TOGGLE_TASK, 
                payload: {id: task.id}
            })}>toggle</button>
            <button onClick={()=>dispatch({
                type: ACTIONS.DELETE_TASK,
                payload: {id: task.id}
            })}>delete</button>
        </div>
    )
}

export default Task
