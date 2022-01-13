var firebaseConfig = {
      apiKey: "AIzaSyCVcR0u9mG7uNokrU5lhcSA0vrR-Ph3_aI",
      authDomain: "einstein-dso9.firebaseapp.com",
      databaseURL: "https://einstein-dso9-default-rtdb.firebaseio.com",
      projectId: "einstein-dso9",
      storageBucket: "einstein-dso9.appspot.com",
      messagingSenderId: "160085610000",
      appId: "1:160085610000:web:f2f90f6ef402125266c495"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome-"+user_name;
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "My purpose is out there somewhere"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}