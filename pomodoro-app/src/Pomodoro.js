import React, { Component } from 'react'
import './Pomodoro.css'

class Pomodoro extends Component {
    state = {
        pomodoroTime: null,
        donePomodoros: 0,
        breakTime: null,
        dailyGoal: null,
        ticking: false
    }

    render() {
        return (
            <div
                className="Pomodoro"
            >
                <h1>Pomodoro App</h1>
                <div>
                    <span>{this.state.pomodoroTime}</span>
                    <span>{this.state.donePomodoros}</span>
                    <button>Start</button>
                </div>
            </div>
        )
    }
}

export default Pomodoro