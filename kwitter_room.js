var firebaseConfig = {
      apiKey: "AIzaSyDq2TemUZ1PB7UbHPeY3FbnXLIOt3CFceA",
      authDomain: "kwitter-97cab.firebaseapp.com",
      databaseURL: "https://kwitter-97cab-default-rtdb.firebaseio.com",
      projectId: "kwitter-97cab",
      storageBucket: "kwitter-97cab.appspot.com",
      messagingSenderId: "57819046108",
      appId: "1:57819046108:web:a876eacc2cd5c3ef4bd419"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.localStorage = "kwitter.html";
  } 

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id="+Room_names+" onaclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"; 
      
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
