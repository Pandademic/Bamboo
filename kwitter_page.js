//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA3K8vzfD19m0EIut20EnAS33bayvG5W0c",
      authDomain: "bamboo-66604.firebaseapp.com",
      databaseURL: "https://bamboo-66604-default-rtdb.firebaseio.com",
      projectId: "bamboo-66604",
      storageBucket: "bamboo-66604.appspot.com",
      messagingSenderId: "318074168390",
      appId: "1:318074168390:web:81fbfd811b0bb2dc4c5647"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=" ";
      
}