//1. Import Area
import React from 'react'

//2. Defination Area

function TodoItem({ task, deleteTask, toggleCompleted }) {
    //1. Hook Area
    
    //2. Function Area

    function handleChange() {
        toggleCompleted(task.id);
    }

    //3. Return Area
    return (
        <div id="tasks" >
            <table width={'100%'}>
                <td width={'25%'}>
                    <input type="checkbox"
                           checked={task.completed}
                           onChange={handleChange}
                    />
                </td>
                <td width={'50%'}>
                    <p>{task.text}</p>
                </td>
                <td width={'25%'}>
                    <button onClick={() => deleteTask(task.id)}>X</button>
                </td>
            </table>
        </div>
    )
}
//3.Export Area
export default TodoItem;
