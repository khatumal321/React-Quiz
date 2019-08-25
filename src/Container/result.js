import React from "react";
import "../App.css"
export default class Result extends React.Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div >
                <div id="second">
                    {this.props.marks >= 70 ? <h4>Congrats! You are passed in Test</h4> : <h4 style={{ color: 'red' }}>Sorry! You are Failed in Test</h4>}
                    <h4 className='mark'>Your Score: {this.props.marks}%</h4>
                </div>
            </div>
        )
    }
}