import './App.css';
import React, {useReducer, useState} from 'react';
import Task from './Task';

export const ACTIONS = {
  ADD_TASK: 'add_task',
  TOGGLE_TASK: 'toggle_task',
  DELETE_TASK: 'delete_task'
}

function reducer(tasks, action){
  switch (action.type){
    case ACTIONS.ADD_TASK:
      return [...tasks, newTask(action.payload.job)]
    case ACTIONS.TOGGLE_TASK:
      return tasks.map(task => {
        if (task.id===action.payload.id){
          return {...task, complete: !task.complete};
        } else {
          return task;
        }
      })
    case ACTIONS.DELETE_TASK:
      return tasks.filter(task=>task.id!==action.payload.id)
  }
}

function newTask(job){
  return {id: Date.now(), job: job, complete: false}
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [job, setJob] = useState('');
  
  function handleSubmit(e){
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TASK, payload: {job: job}})
    setJob('');
  }
  console.log(tasks);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={job} 
        onChange={e=> setJob(e.target.value)}/>
      </form>
      {tasks.map(task =>(
        <Task key={task.id} task={task} dispatch={dispatch}/>
      ))}
    </div>
  );
}

export default App;
