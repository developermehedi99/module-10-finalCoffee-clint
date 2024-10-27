// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqHObxjwVeSlT1XJOYrJtXHDAeN_oITf0",
    authDomain: "module-11-car.firebaseapp.com",
    projectId: "module-11-car",
    storageBucket: "module-11-car.appspot.com",
    messagingSenderId: "53763386687",
    appId: "1:53763386687:web:b66eec02a9a1573b14378a"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;