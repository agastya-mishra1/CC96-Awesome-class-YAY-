// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCWOaEDgQu-4l5vc9eBjCiTIFfvtujen_Q",
    authDomain: "kwitter-e7b3a.firebaseapp.com",
    databaseURL: "https://kwitter-e7b3a-default-rtdb.firebaseio.com",
    projectId: "kwitter-e7b3a",
    storageBucket: "kwitter-e7b3a.appspot.com",
    messagingSenderId: "1045721073130",
    appId: "1:1045721073130:web:801948b81310d211555e93"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
pass_word = localStorage.getItem("Password");
room_name=localStorage.getItem("room_name");  

function send(){
msg = document.getElementById("msg").value;   
firebase.database().ref(room_name).push({
    name:user_name, 
    message:msg,      
    });
    document.getElementById("msg").value="";
}