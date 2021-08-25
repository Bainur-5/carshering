import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyAQ3C9GzlzXmdUWR4FguOxRqcGPXTMjo2M",
    authDomain: "carshering-b163e.firebaseapp.com",
    databaseURL: "https://carshering-b163e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "carshering-b163e",
    storageBucket: "carshering-b163e.appspot.com",
    messagingSenderId: "398123662109",
    appId: "1:398123662109:web:53735851e70e9adb65bff4"
  };

firebase.initializeApp(firebaseConfig)
