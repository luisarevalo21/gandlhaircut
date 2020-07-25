import axios from "axios";

const instance = axios.create({
  baseURL: "https://gandlhaircut.firebaseio.com/",
});

export default instance;

// var firebaseConfig = {
//   apiKey: "AIzaSyAuotKbXd6BxoQtJVvLP99nos-bym91P08",
//   authDomain: "gandlhaircut.firebaseapp.com",
//   databaseURL: "https://gandlhaircut.firebaseio.com",
//   projectId: "gandlhaircut",
//   storageBucket: "gandlhaircut.appspot.com",
//   messagingSenderId: "265474465246",
//   appId: "1:265474465246:web:b9aad7eaaaf49cbe74914f",
//   measurementId: "G-ENHJ24VFRW",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
