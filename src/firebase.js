import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);