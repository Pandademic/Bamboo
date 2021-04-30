
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
