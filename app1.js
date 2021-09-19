
//Function for login and authentication through firebase
function login() {
  const useremail = document.getElementById("logemail").value;
  const userpassword = document.getElementById("logpassword").value;
  // console.log(useremail, userpassword);
  firebase.auth().signInWithEmailAndPassword(useremail,userpassword)
      .then((userCredential) => {
          // When Signed in is Successfull
          const user = userCredential.user;
          window.location.href="index%20level%201.html"
      })
      .catch((error) => {       
        // When Signed in not Successfull
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert("Login failed \nInvalid Email or Password");
      });
}
//........
function signup() {
    const useremail = document.getElementById("logemail").value;
    const userpassword = document.getElementById("logpassword").value;
firebase.auth().createUserWithEmailAndPassword(useremail, userpassword)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    window.alert("Sign up Successfully");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}