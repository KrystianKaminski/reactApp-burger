import React, { Component } from 'react'
import './Pomodoro.css'

class Pomodoro extends Component {
    state = {
        pomodoroTime: 20,
        remainingTime: 0,
        donePomodoros: 0,
        breakTime: null,
        dailyGoal: null,
        ticking: false,
        minutes: null,
        seconds: null,
    }

    componentDidMount() {
        this.setState({
            remainingTime: this.state.pomodoroTime * 60
        })
    }

    startCountdown = () => {
        this.intervalId = setInterval(this.tick, 1000)
    }

    stopCountdown = () => {
        clearInterval(this.intervalId)
    }

    tick = () => {
        const minutes = Math.floor(this.state.remainingTime / 60)
        const seconds = this.state.remainingTime - minutes * 60
        this.setState({
            ticking: true,
            remainingTime: this.state.remainingTime - 1,
            minutes: minutes < 10 ? "0" + minutes : minutes,
            seconds: seconds < 10 ? "0" + seconds : seconds
        })
    }

    render() {
        return (
            <div
                className="Pomodoro"
            >
                <h1>Pomodoro App</h1>
                <div>
                    <span>
                        {
                            this.state.minutes ? `${this.state.minutes}:` : 'Click start!'
                        }
                        {
                            this.state.seconds
                        }
                    </span>
                    <span>{this.state.donePomodoros}</span>
                    <div
                        className="PomodoroControls"
                    >
                        <button
                            onClick={this.startCountdown}
                        >Start
                    </button>
                        <button
                            onClick={this.stopCountdown}
                        >Stop
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pomodoro