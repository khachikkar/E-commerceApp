// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl8r0UqeckpnxPJtmL03HZIeQHR--flZY",
  authDomain: "orbijew.firebaseapp.com",
  projectId: "orbijew",
  storageBucket: "orbijew.appspot.com",
  messagingSenderId: "784532111992",
  appId: "1:784532111992:web:cccbca6cfd63b52f55e38d",
  measurementId: "G-FLQCR5EB7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export{
    auth
}