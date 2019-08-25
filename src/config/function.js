import { firebaseApp, provider } from './firebase.js'

let facebookLogin = () => {

  return new Promise((resolve, reject) => {
    provider.setCustomParameters({
      'display': 'popup'
    });
    firebaseApp.auth().signInWithPopup(provider).then(function (result) {
      var user = result.user;
      console.log(user)
      let userObj = {
        name: user.displayName,
        photo: user.photoURL

      }
      console.log(userObj)
      resolve(userObj)
    }).catch(function (error) {
      console.log(`error ==>`, error)
      reject(error)
    });

  })

}


function api() {
  return new Promise((resolve, reject) => {
    fetch(' https://opentdb.com/api.php?amount=10')
      .then(response => response.json())
      .then(json => resolve(json.results))
      .catch(err => reject(err))
  })
}



var seconds = 6
let Timer = () => {
  return new Promise((resolve, reject) => {
    var minutes = Math.round((seconds - 30) / 60),
      remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
      remainingSeconds = "0" + remainingSeconds;
    }
    resolve(minutes + ":" + remainingSeconds)
    if (seconds == 0) {
      reject("0:00")
    } else {
      seconds--;
    }
  })
}


let checkUser = () => {
  return new Promise((resolve, reject) => {
    firebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        let userObj = {
          name: user.displayName,
          photo: user.photoURL

        }
        console.log(userObj)
        resolve(userObj)
      } else {
        reject(false)
      }
    });

  })

}


let logout=()=>{
  return new Promise((resolve,reject)=>{
    firebaseApp.auth().signOut().then(function() {
      resolve(true)
      // Sign-out successful.
    }, function(error) {
reject(false)    });

  })
 
}

export {
  facebookLogin, api, Timer,checkUser,logout

}  