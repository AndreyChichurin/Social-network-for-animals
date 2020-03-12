import firebase from "firebase";
import "firebase/storage";

  var firebaseConfig = {
    apiKey: "AIzaSyA12TUh1yk1UvJa5EIVODdO2gBcXCdQREg",
    authDomain: "meowyao-6468e.firebaseapp.com",
    databaseURL: "https://meowyao-6468e.firebaseio.com",
    projectId: "meowyao-6468e",
    storageBucket: "meowyao-6468e.appspot.com",
    messagingSenderId: "126290778105",
    appId: "1:126290778105:web:b5bfdac080c5aacdf80f28",
    measurementId: "G-QKR892YK2W"
  };

  
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database()

export { database, firebase,storage as default };


