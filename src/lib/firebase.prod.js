import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// we need to seed the database

const config = {
  apiKey: "AIzaSyAGh3REfzA1dymSvXTDcMiUpVkyUMxbdK4",
  authDomain: "netflix-f1a68.firebaseapp.com",
  databaseURL: "https://netflix-f1a68.firebaseio.com",
  projectId: "netflix-f1a68",
  storageBucket: "netflix-f1a68.appspot.com",
  messagingSenderId: "1062488158356",
  appId: "1:1062488158356:web:e592b4d71e6299c7348481",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
