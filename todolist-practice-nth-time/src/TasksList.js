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
                        key={task.key}
                    >{task.todo}
                        <button
                            onClick={() => props.delete(task.key)}
                        >X</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default TasksList