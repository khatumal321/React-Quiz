import React from 'react';
import './App.css';
import logo from './logo.png'
// import download from './download.jpg'
// import Function from "./Container/Login"
import { facebookLogin , Timer,checkUser,logout} from './config/function'
import LoginBtn from './Container/Login'
import Detail from './Container/quizdetail';
import { api } from './config/function';


// let sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: "url(" + { download } + ")"
// };
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      login: false,
      result : true,
      data: '',
      counter: 0,
      checked: true,
      right:0
    }
  this.next = this.next.bind(this)
  }
 

  async componentDidMount() {
    let { counter } = this.state
    let data = await api()

    let user = await checkUser()
    console.log(data)
    data[counter].incorrect_answers.push(data[counter].correct_answer)
    this.setState({
        data: data,
        allAnswer: data[counter].incorrect_answers, userName: user.name,
        userImg: user.photo,
        login: true,
    })
}
next(val) {
    let { data, counter } = this.state
    if (data.length-1 === counter){
      this.setState({
        result : false
      })
    }
    else{
    data[counter + 1].incorrect_answers.push(data[counter + 1].correct_answer)
    this.setState({
        counter: counter + 1,
        allAnswer: data[counter + 1].incorrect_answers,
        checked: true
    })
  }

  
  if(val=== data[counter].correct_answer){
    let {right} =this.state
    this.setState({
      right:right+10
    })
  }
}


  btn = async () => {
    try {
      let user = await facebookLogin()
      this.setState({
        userName: user.name,
        userImg: user.photo,
        login: true,
      })
    }
    catch (err) {
      console.log(err)

    }
  }


  timerShow = (res) => {
   let interval= setInterval(async () => {
      try {
        let time = await Timer();
        console.log(time)
        if (time === '0:00') {
          this.setState({
            result: false,
          })
          clearInterval(interval)
        }
        else {
          this.setState({
            Time: time,
            start: false
          })
        }

      }
      catch (error) {
        console.log(error)
      }
    }, 1000)

  }
  Logout = async()=>{
     await logout()
    await this.setState({
       login:false,
       counter:0
     })
    //  alert("working");
  }
render() {
  return (
    <div>
      
      {
        this.state.login ?
          <div>
            <Detail Logout={this.Logout} next = {this.next} allAnswer = {this.state.allAnswer} data = {this.state.data}
             counter = {this.state.counter} result = {this.state.result} name={this.state.userName}
              img={this.state.userImg} onclick = {this.timerShow} time = {this.state.Time} marks={this.state.right}  />
          </div>
          :
          <div>
            <center  id="first">
              <h1>Wellcome to Quiz-App</h1>
              <img src={logo} width="15%" height="10%" />
              <LoginBtn btn={this.btn} />
            </center>
          </div>
      }
    </div>
  )
}
}

