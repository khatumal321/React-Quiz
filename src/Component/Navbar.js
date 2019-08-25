import React from "react";
import "../App.css"



export default class Navbar extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper">
                        {/* <a href="" class="brand-logo"><img src={logo} width="100px" height="65px" /></a> */}
                        <ul id="nav-mobile" >
                            <li>
                                <img width='30px' align="center" src={this.props.img} />&nbsp;
                                {this.props.name}&nbsp;&nbsp;
                                {this.props.btn}
                            </li>
                            <li><button id="logout" onClick={()=>this.props.Logout()}>Logout</button></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}