import React from 'react'
import Navbar from '../Component/Navbar';
import Questions from '../Container/question.jsx'
import Result from './result';

export default class Detail extends React.Component {
    constructor() {
        super()
        this.state = {
            start: false
        }
    }

    startQuiz = () => {
        this.setState({
            start: true
        })
    }
    render() {
        console.log(11, this.props)
        return (
            <div>
                <Navbar Logout={this.props.Logout} img={this.props.img} name={this.props.name} />
                {
                    this.state.start ? <div> {this.props.result ? <Questions time={this.props.time} next={this.props.next}
                        allAnswer={this.props.allAnswer} data={this.props.data} counter={this.props.counter} /> : <Result marks={this.props.marks} />}</div> :
                        <div id="mainDiv">
                            <h3>Welcome, {this.props.name}!</h3>
                            <h3>Quiz Detail</h3>
                            <h5>Total Quesions : 10</h5>
                            <h5>Passing Score  : 70%</h5>
                            <h5>Text Duration : 10 minutes</h5>

                            <button id="startBtn" onClick={() => {
                                this.startQuiz();
                                this.props.onclick()
                            }} >Start Quiz</button>
                        </div>
                }
            </div>
        )
    }
}