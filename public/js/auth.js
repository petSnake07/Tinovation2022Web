var signedUp = false;

function submitSignUp(){
    console.log("Sign Up Successful");
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    // Signed in 
    signedUp = true;
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
}

function writeUserData(userId, username) {
  firebase.database().ref('users/' + userId).set({
    username: username
  });
}

function submitLogin(){
  console.log("Login Successful");
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, pass)
.then((userCredential) => {
  // Signed in 
  var user = userCredential.user;
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  // ..
});
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid);
    if(signedUp){
      var username = document.getElementById("username").value;
      writeUserData(uid, username);
      console.log("Data submitted");
    }
    // ...
  } else {
    // User is signed out
    // ...
  }
});

function logout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    console.log("Signout Successful");
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
  
}
