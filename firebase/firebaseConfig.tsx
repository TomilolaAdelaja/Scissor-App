// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnpqH7M7gT3eI6Wau0KQJbDd89ivNBe2s",
  authDomain: "scissor-app-d719c.firebaseapp.com",
  projectId: "scissor-app-d719c",
  storageBucket: "scissor-app-d719c.appspot.com",
  messagingSenderId: "729725784063",
  appId: "1:729725784063:web:98d93c23d25bc71935a1ca",
  measurementId: "G-ZLBVB2YZFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default app