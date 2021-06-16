import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyAWgGYqgECfWhp79eaymv7h6yAGiEl-EDo",
    authDomain: "nba-recommendation.firebaseapp.com",
    projectId: "nba-recommendation",
    storageBucket: "nba-recommendation.appspot.com",
    messagingSenderId: "769338862645",
    appId: "1:769338862645:web:e66c4c9328d014c6da557c",
    measurementId: "G-SZZNY0RTQ1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();
const database = firebaseApp.firestore();

export default database