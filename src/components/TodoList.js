//1. Import Area
import React, { useState } from 'react'
import TodoItem from './TodoItem';

//2. Function Defination Area
let TodoList = () => {

  //1. Hooks Area
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false
        }
    ]);

    const [text, setText] = useState('');

  //2. Function Area
  function addTask(text) {
        const newTask = {
        id: Date.now(),
        text,
        completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
  }

  function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id) {
        setTasks(tasks.map(task => {
        if (task.id === id) {
            return {...task, completed: !task.completed};
            } else {
            return task;
        } 
        }));
  }

  //3. Return Area
  return (
      <div className="container">
          <div id="newtask">
            <input id="myInput" value={text} onChange={e => setText(e.target.value)} />
                <button className="addBtn" onClick={() => addTask(text)}>Add</button>
                {tasks.map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
          </div>
        </div>
    );
}

//Export Area
export default TodoList;
