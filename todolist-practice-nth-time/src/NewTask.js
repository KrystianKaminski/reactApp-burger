import React from 'react'
import './NewTask.css'

const NewTask = (props) => {
    return (
        <div
            className="NewTask"
        >
            <h2>Add your daily task</h2>
            <input
                type="text"
                onChange={props.changeHandler}
            />
        </div>
    )
}

export default NewTask