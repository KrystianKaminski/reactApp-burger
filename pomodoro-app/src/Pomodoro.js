import React, { Component } from 'react'
import './Pomodoro.css'

class Pomodoro extends Component {
    state = {
        pomodoroTime: 20,
        remainingTime: 0,
        donePomodoros: 0,
        breakTime: null,
        dailyGoal: null,
        ticking: false
    }

    componentDidMount() {
        this.setState({
            remainingTime: this.state.pomodoroTime * 60
        })
    }

    startCountdown = () => {
        this.intervalId = setInterval(this.tick, 1000)
        this.setState({
            remainingTime: this.state.remainingTime - 1,
        })

    }

    tick = () => {
        this.setState({
            remainingTime: this.state.remainingTime - 1
        })
    }

    render() {
        return (
            <div
                className="Pomodoro"
            >
                <h1>Pomodoro App</h1>
                <div>
                    <span>{this.state.remainingTime}</span>
                    <span>{this.state.donePomodoros}</span>
                    <button
                        onClick={this.startCountdown}
                    >Start</button>
                </div>
            </div>
        )
    }
}

export default Pomodoro