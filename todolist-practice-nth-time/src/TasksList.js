import React from 'react'
import './TasksList.css'

const TasksList = props => {
    return (
        <ul
            className="TasksList"
        >
            {props.tasks &&
                props.tasks.map(task => (
                    <li
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none'
                        }}
                        key={task.key}
                        onClick={() => props.clicked(task.key)}
                    >{task.todo}
                        <button
                            onClick={(e) => props.delete(e, task.key)}
                        >X</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default TasksList