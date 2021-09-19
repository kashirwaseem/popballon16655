const firebaseConfig = {
  apiKey: "AIzaSyBPd-odgAYOGACrNK-BsoWO9Y5gtJrs4Qc",
        authDomain: "hackaton-b4e5b.firebaseapp.com",
        projectId: "hackaton-b4e5b",
        storageBucket: "hackaton-b4e5b.appspot.com",
        messagingSenderId: "347559502123",
        appId: "1:347559502123:web:caa331adfbf5e71710e56e",
        measurementId: "G-998ND0D8QQ",
  };
  firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      location.replace("index.html");
    } else {
  document.getElementById("user").innerHTML= "Hello, "+ user.email;
  console.log(useremail);
    }
  });

function logout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}