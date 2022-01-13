//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCD7ytQg3qh8B3fTgDPtKN1EuSZkFjoCCg",
      authDomain: "kwitter-aadee.firebaseapp.com",
      databaseURL: "https://kwitter-aadee-default-rtdb.firebaseio.com",
      projectId: "kwitter-aadee",
      storageBucket: "kwitter-aadee.appspot.com",
      messagingSenderId: "12508406318",
      appId: "1:12508406318:web:de919cfa38b12b8a0ff5bf"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
         like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}