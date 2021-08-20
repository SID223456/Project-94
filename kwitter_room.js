
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration

var firebaseConfig = {

      apiKey: "AIzaSyA4GfWiPB7QJ6afgEczRCAe6dzXayCeP4k",
  
      authDomain: "letschat-hi.firebaseapp.com",
  
      databaseURL: "https://letschat-hi-default-rtdb.firebaseio.com",
  
      projectId: "letschat-hi",
  
      storageBucket: "letschat-hi.appspot.com",
  
      messagingSenderId: "245365770340",
  
      appId: "1:245365770340:web:688a4379e7145e2c6af771"
  
    };
  
    // Initialize Firebase
  
    firebase.initializeApp(firebaseConfig);
  

    function add_room(){
      room = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room).update ({
            purpose:"Add Room"
      });
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
