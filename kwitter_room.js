
var firebaseConfig = {
      apiKey: "AIzaSyCDJPGI0-1l40KIppoMqScS99U8APIDn9o",
      authDomain: "kwitter-dcea0.firebaseapp.com",
      databaseURL: "https://kwitter-dcea0-default-rtdb.firebaseio.com",
      projectId: "kwitter-dcea0",
      storageBucket: "kwitter-dcea0.appspot.com",
      messagingSenderId: "270084471312",
      appId: "1:270084471312:web:6aea4c3bf1b21dbd512895"
    };
    
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}