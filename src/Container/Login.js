import React from "react";
import "../App.css"
import facebook from './../facebook-icon.jpg'
export default class LoginBtn extends React.Component {
    constructor() {
        super()
    }
  
    render() {
        return (
            <div>
                <center>
                    <button id="btn" onClick={()=>this.props.btn()} class="#01579b light-blue darken-4" type="submit" name="action"> 
                    <img src={facebook} align="center" width="35px"/> Login with facebook
                    </button>
                </center>
            </div>
        )
    }
}