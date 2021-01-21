import React, {useReducer, useState} from 'react';
import './App.css';
import TaskObject from './TaskObject';

export const ACTIONS = {
  ADD_TASKNAME: "add-taskname",
  TGL_TASKNAME: "toggle-taskname",
  DLT_TASKNAME: "delete-taskname"
}

function reducer(taskList, action){
  switch (action.type){
    case ACTIONS.ADD_TASKNAME:
      return [...taskList, newTask(action.payload.taskName)]
    case ACTIONS.TGL_TASKNAME:
      return taskList.map(task=>{
        if(task.id===action.payload.id){
          return {...task, complete: !task.complete}
        } else {
          return task;
        }
      })
    case ACTIONS.DLT_TASKNAME:
      return taskList.filter(task=>task.id!==action.payload.id)
  }
}

function newTask(taskName){
  return {id: Date.now(), taskName: taskName, complete: false}
}

function App() {
  const [taskList, dispatch] = useReducer(reducer, []);
  const [taskName, setTaskName] = useState('');
  function handleSubmit(e){
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TASKNAME, payload: {taskName: taskName}})
    // console.log(taskList);
    // console.log(taskList);
    // console.log(taskList);
    setTaskName('');
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
      </form>
      {taskList.map(task=>(
        <TaskObject key={task.id} task={task} disp={dispatch}/>
      ))}
    </div>
  );
}

export default App;
