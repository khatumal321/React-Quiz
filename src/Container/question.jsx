
import React from 'react'

export default class Questions extends React.Component {
    constructor() {
        super()
        this.state = {
            data: '',
            counter: 0,
            checked: [false, false, false, false],
            disabled: true
        };
    }


    checkAns = (val, i) => {
        let { checked } = this.state
        var flag = false
        for (var key in checked) {
            if (checked[key] === true) {
                checked = [false, false, false, false]
                flag = true
            }
        }
        if (flag === true) {
            checked[i] = true
        }
        checked[i] = true
        this.setState({
            checked,
            disabled: false,
            answer: val
        })

    }

    getValue = (val) => {
        this.setState({
            checked: [false, false, false, false],
            disabled: true

        })
        this.props.next(val)
    }

    render() {
        let { data, allAnswer, counter } = this.props
        console.log(this.props.onclick)
        return (
            <div>
                <center>
                    <h4>Test Duration : {this.props.time}</h4>
                </center>
                <div id="question">

                    <h6>{data && data[counter].question}</h6>
                    {data && allAnswer.map((value, index) =>
                        <div className="radios">
                            <table id="rblSex">
                                <label>
                                    <tr>
                                        <td>
                                            <input name="group1" onChange={() => this.checkAns(value, index)} checked={this.state.checked[index]} value={value} type="radio" />
                                            <span className="value">{value}</span></td>
                                    </tr>
                                </label>
                            </table>
                        </div>
                    )}
                    <center>
                        <input className="btn-large" type='button' value='Next' disabled={this.state.disabled} onClick={()=>this.getValue(this.state.answer)} /></center>
                </div>
            </div>
        )
    }
}